<script lang="ts">
  import Graph from "./Graph.svelte";

  const nodes = [
    { id: 1, label: "photo" },
    { id: 2, label: "video" },
    { id: 3, label: "exhibitions" },
    { id: 4, label: "music" },
    { id: 5, label: "bio" },
  ];
</script>

<div class="absolute top-0 left-0 w-screen h-screen">
  <Graph {nodes} />
</div>
