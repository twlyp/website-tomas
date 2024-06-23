<script lang="ts">
  import Photo from "./Photo.svelte";
  import { NODES, PAGES } from "./constants";
  import { currentPage } from "./stores";

  $: Content = $currentPage === PAGES.PHOTO ? Photo : null;
  $: backgroundColor = NODES.find((d) => d.page === $currentPage)?.color;
</script>

<div
  class="absolute top-0 left-10 max-w-2xl h-screen overflow-auto no-scrollbar"
  class:hidden={$currentPage === null}
  style="background-color: {backgroundColor}aa"
>
  <svelte:component this={Content} />
</div>
