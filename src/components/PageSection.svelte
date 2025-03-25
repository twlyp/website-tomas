<script lang="ts">
  import { quadInOut } from "svelte/easing";
  import { scale } from "svelte/transition";
  import type { ChildrenProp, HTMLProps } from "$types";
  import IconCross from "$components/IconCross.svelte";
  import { goto } from "$app/navigation";
  import { COLORS_PAGES_BACKGROUND, type PAGES } from "$constants";

  interface Props extends ChildrenProp, HTMLProps {
    page?: PAGES;
  }

  let { class: klass, page, children }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class="absolute h-screen w-screen overflow-hidden bg-transparent sm:p-5 {klass}"
  transition:scale={{ duration: 400, easing: quadInOut }}
  onclick={() => goto("/")}
>
  <div
    class="no-scrollbar h-full w-full overflow-scroll p-5 pb-20 sm:rounded-md md:pb-5"
    style="background-color: {page ? COLORS_PAGES_BACKGROUND[page] : '#00000099'}"
    onclick={(e) => e.stopPropagation()}
  >
    {@render children()}
  </div>

  <a class="fixed top-7 right-7 rounded-full bg-none" href="/">
    <IconCross />
  </a>
</div>
