<script lang="ts">
  import Graph from "./Graph.svelte";

  const nodes = [
    { id: 0, label: "logo" },
    { id: 1, label: "photo" },
    { id: 2, label: "video" },
    { id: 3, label: "exhibitions" },
    { id: 4, label: "music" },
    { id: 5, label: "bio" },
  ];

  const links = [
    { source: 1, target: 0, value: 1 },
    { source: 2, target: 0, value: 1 },
    { source: 3, target: 0, value: 1 },
    { source: 4, target: 0, value: 1 },
    { source: 5, target: 0, value: 1 },
  ];
</script>

<div class="absolute top-0 left-0 w-screen h-screen">
  <Graph {links} {nodes} />
</div>
