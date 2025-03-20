<script lang="ts">
  import { quadInOut } from "svelte/easing";
  import { scale } from "svelte/transition";
  import type { ChildrenProp } from "../routes/types";
  import IconCross from "./IconCross.svelte";
  import { goto } from "$app/navigation";
  import { COLORS_PAGES_BACKGROUND, type PAGES } from "../routes/constants";

  interface Props extends ChildrenProp {
    page: PAGES;
  }

  // biome-ignore lint/style/useConst: props
  let { page, children }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class="absolute overflow-hidden p-5 w-screen h-screen bg-transparent"
  transition:scale={{ duration: 400, easing: quadInOut }}
  onclick={() => goto("/")}
>
  <div
    class="w-full h-full overflow-scroll no-scrollbar rounded-md flex flex-col items-center p-5"
    style="background-color: {COLORS_PAGES_BACKGROUND[page] ?? 'white'}"
    onclick={(e) => e.stopPropagation()}
  >
    {@render children()}
  </div>

  <a class="fixed top-7 right-7 bg-none rounded-full" href="/">
    <IconCross />
  </a>
</div>
