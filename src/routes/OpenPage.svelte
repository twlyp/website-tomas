<script lang="ts">
  import PagePhoto from "../components/PagePhoto.svelte";
  import { COLORS_PAGES_BACKGROUND, PAGES } from "./constants";
  import { currentPage } from "./stores";
  import IconCross from "../components/IconCross.svelte";
  import VideoPage from "./video/VideoPage.svelte";
  import MusicPage from "./music/MusicPage.svelte";
  import { scale } from "svelte/transition";
  import { quadInOut } from "svelte/easing";

  const PADDING_X = 20;
  const PADDING_Y = 15;

  function getPageComponent(page: PAGES | null) {
    if (page === PAGES.PHOTO) return PagePhoto;
    if (page === PAGES.VIDEO) return VideoPage;
    if (page === PAGES.MUSIC) return MusicPage;
    return null;
  }

  $: Content = getPageComponent($currentPage);
  $: backgroundColor = $currentPage
    ? COLORS_PAGES_BACKGROUND[$currentPage]
    : "none";

  let width: number;
  let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

{#if $currentPage}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="absolute overflow-auto no-scrollbar p-5 px-10 rounded-xs"
    style="background-color: {backgroundColor};
         width: {width - 2 * PADDING_X}px;
         height: {height - 2 * PADDING_Y}px;
         top: {PADDING_Y}px;
         left: {PADDING_X}px;"
    on:click|stopPropagation
    transition:scale={{ duration: 400, easing: quadInOut }}
  >
    <svelte:component this={Content} />

    <button
      class="fixed top-5 right-7 bg-none rounded-full"
      on:click={() => currentPage.set(null)}
    >
      <IconCross />
    </button>
  </div>
{/if}
