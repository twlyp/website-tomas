<script lang="ts">
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import Background from "./Background.svelte";
  import { currentPage } from "./stores";
  import type { PAGES } from "./constants";
  // @ts-ignore
  import forceBoundary from "d3-force-boundary";

  interface NodeDatum extends d3.SimulationNodeDatum {
    page: PAGES;
    label: string;
    color: string;
  }
  interface LinkDatum extends d3.SimulationLinkDatum<NodeDatum> {}

  export let nodes: NodeDatum[];

  let container: HTMLDivElement;
  // biome-ignore lint/style/useConst: <explanation>
  let width = 500;
  // biome-ignore lint/style/useConst: <explanation>
  let height = 600;
  const nodeRadius = 70;

  const INITIAL_VELOCITY = 50;
  nodes = nodes.map((d) => ({
    ...d,
    x: Math.random() * width - width / 2,
    y: Math.random() * height - height / 2,
    vx: Math.random() * INITIAL_VELOCITY,
    vy: Math.random() * INITIAL_VELOCITY,
  }));
  $: nodes = nodes.map((d) => Object.create(d));

  let simulation: d3.Simulation<NodeDatum, LinkDatum>;

  onMount(() => {
    simulation = d3
      .forceSimulation<NodeDatum, LinkDatum>(nodes)
      .alphaDecay(0.01)
      .velocityDecay(0.1)
      .force("charge", d3.forceManyBody())
      .force("collide", d3.forceCollide(nodeRadius))
      .force(
        "boundary",
        forceBoundary(-width / 2, -height / 2, width / 2, height / 2).strength(
          0.001
        )
      )
      .on("tick", simulationUpdate);

    d3.select(container as Element).call(
      d3
        .drag()
        .container(container)
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
    const node = simulation.find(
      event.x - width / 2,
      event.y - height / 2,
      nodeRadius
    );
    return node;
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  bind:clientWidth={width}
  bind:clientHeight={height}
  bind:this={container}
  class="absolute top-0 left-0 w-screen h-screen overflow-hidden"
  on:click={() => currentPage.set(null)}
>
  {#each nodes as node}
    <div
      id={node.page}
      class="absolute node"
      style="
          background-color: {node.color};
          width: {nodeRadius}px;
          height: {nodeRadius}px;
          left: {node.x + width / 2}px;
          top: {node.y + height / 2}px;
          border-radius: 50%;
        "
      on:click|stopPropagation={() => currentPage.set(node.page)}
    >
      <p>{node.label}</p>
    </div>
  {/each}
</div>
