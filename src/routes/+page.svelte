<script lang="ts">
  import Graph from "./Graph.svelte";
  import OpenPage from "./OpenPage.svelte";
  import { NODES } from "./constants";
</script>

<div class="absolute top-0 left-0 w-screen h-screen">
  <Graph nodes={NODES} />
</div>

<OpenPage />