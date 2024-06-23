<script lang="ts">
  import Graph from "./Graph.svelte";
  import OpenPage from "./OpenPage.svelte";
  import { NODES } from "./constants";
</script>

<Graph nodes={NODES} />

<OpenPage />
