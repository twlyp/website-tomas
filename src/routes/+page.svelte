<script lang="ts">
  import Graph from "./Graph.svelte";
  import OpenPage from "./OpenPage.svelte";
  import { PAGES, PAGE_NAMES } from "./constants";

  const nodes = Object.values(PAGES).map((page, id) => ({ id, page, label: PAGE_NAMES[page] }));
</script>

<div class="absolute top-0 left-0 w-screen h-screen">
  <Graph {nodes} />
</div>

<OpenPage />