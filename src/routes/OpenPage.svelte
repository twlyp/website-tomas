<script lang="ts">
  import Photo from "./photo/Photo.svelte";
  import { NODES, PAGES } from "./constants";
  import { currentPage } from "./stores";

  $: Content = $currentPage === PAGES.PHOTO ? Photo : null;
  $: backgroundColor = NODES.find((d) => d.page === $currentPage)?.color;
</script>

<div
  class="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-screen overflow-auto no-scrollbar p-5"
  class:hidden={$currentPage === null}
  style="background-color: {backgroundColor}aa"
>
  <svelte:component this={Content} />
</div>
