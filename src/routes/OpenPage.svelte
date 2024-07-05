<script lang="ts">
  import PhotoPage from "./photo/PhotoPage.svelte";
  import { BACKGROUND_COLORS, NODES, PAGES } from "./constants";
  import { currentPage } from "./stores";
  import IconCross from "./IconCross.svelte";
  import VideoPage from "./video/VideoPage.svelte";
  import MusicPage from "./music/MusicPage.svelte";

  const PADDING_X = 20;
  const PADDING_Y = 15;

  function getPageComponent(page: PAGES | null) {
    if (page === PAGES.PHOTO) return PhotoPage;
    if (page === PAGES.VIDEO) return VideoPage;
    if (page === PAGES.MUSIC) return MusicPage;
    return null;
  }

  $: Content = getPageComponent($currentPage);
  $: backgroundColor = $currentPage ? BACKGROUND_COLORS[$currentPage] : "none";

  let width: number;
  let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div
  class="absolute overflow-auto no-scrollbar p-5 px-10 rounded-sm"
  class:hidden={$currentPage === null}
  style="background-color: {backgroundColor};
         width: {width - 2 * PADDING_X}px;
         height: {height - 2 * PADDING_Y}px;
         top: {PADDING_Y}px;
         left: {PADDING_X}px;"
>
  <svelte:component this={Content} />

  <button
    class="absolute top-2 right-2 bg-none rounded-full"
    on:click={() => currentPage.set(null)}
  >
    <IconCross />
  </button>
</div>
