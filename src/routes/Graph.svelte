<script lang="ts">

  import { onMount } from "svelte";
  import * as d3 from "d3";
  import Background from "./Background.svelte";

  interface NodeDatum extends d3.SimulationNodeDatum {
    id: number;
    label: string;
  }
  interface LinkDatum extends d3.SimulationLinkDatum<NodeDatum> {}

  export let nodes: NodeDatum[];

  let svg: SVGSVGElement;
  let width = 500;
  let height = 600;
  const nodeRadius = 45;

  $: nodes = nodes.map((d) => Object.create(d));

  const colourScale = d3.scaleOrdinal(d3.schemeCategory10);

  let simulation: d3.Simulation<NodeDatum, LinkDatum>;

  onMount(() => {
    simulation = d3
      .forceSimulation<NodeDatum, LinkDatum>(nodes)
      .force("charge", d3.forceManyBody())
      .force("collide", d3.forceCollide(nodeRadius))
      .on("tick", simulationUpdate);

    d3.select(svg as Element).call(
      d3
        .drag()
        .container(svg)
        .subject(dragsubject)
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );
  });

  function simulationUpdate() {
    simulation.tick();
    nodes = [...nodes];
  }

  type DragEvent = d3.D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>;

  function dragsubject(event: DragEvent) {
    return simulation.find(event.x, event.y, nodeRadius);
  }

  function dragstarted(event: DragEvent) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event: DragEvent) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event: DragEvent) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<svg
  bind:this={svg}
  {width}
  {height}
  viewBox="{-width / 2} {-height / 2} {width} {height}"
>
  <Background {width} {height} />
  <g id="graph">
    {#each nodes as node}
      <circle
        class="node"
        r={nodeRadius}
        fill={colourScale(node.id.toString())}
        cx={node.x}
        cy={node.y}
      />
    {/each}
  </g></svg
>
