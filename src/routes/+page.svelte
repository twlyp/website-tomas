<script lang="ts">
  import Graph from "./Graph.svelte";
  import OpenPage from "./OpenPage.svelte";
  import { NODES } from "./constants";
</script>

<main
  class="absolute top-0 left-0 w-screen h-screen overflow-hidden
  bg-gradient-to-br from-red-700 to-red-700 via-yellow-400 animate-gradient-xy"
>
  <Graph nodes={NODES} />

  <OpenPage />
</main>
