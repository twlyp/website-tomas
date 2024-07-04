<script lang="ts">
  import Photo from "./photo/Photo.svelte";
  import { NODES, PAGES } from "./constants";
  import { currentPage } from "./stores";
  import IconCross from "./IconCross.svelte";
  import VideoPage from "./video/VideoPage.svelte";

  $: Content =
    $currentPage === PAGES.PHOTO
      ? Photo
      : $currentPage === PAGES.VIDEO
        ? VideoPage
        : null;
  $: backgroundColor = NODES.find((d) => d.page === $currentPage)?.color;
</script>

<div
  class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-screen overflow-auto no-scrollbar p-5 px-10"
  class:hidden={$currentPage === null}
  style="background-color: {backgroundColor}aa"
>
  <svelte:component this={Content} />

  <button
    class="absolute top-5 right-5 bg-none rounded-full"
    on:click={() => currentPage.set(null)}
  >
    <IconCross />
  </button>
</div>
