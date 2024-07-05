<script lang="ts">
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import Background from "./Background.svelte";
  import { currentPage } from "./stores";
  import { NODE_COLORS, type PAGES } from "./constants";
  // @ts-ignore
  import forceBoundary from "d3-force-boundary";

  interface NodeDatum extends d3.SimulationNodeDatum {
    page: PAGES;
    label: string;
  }
  interface LinkDatum extends d3.SimulationLinkDatum<NodeDatum> {}

  export let nodes: NodeDatum[];

  let svg: SVGSVGElement;
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
      .alphaDecay(0.02)
      .velocityDecay(0.02)
      .alphaTarget(0.2)
      .force("charge", d3.forceManyBody())
      .force("collide", d3.forceCollide(nodeRadius))
      .force(
        "boundary",
        forceBoundary(-width / 2, -height / 2, width / 2, height / 2).strength(
          0.001
        )
      )
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
  bind:this={svg}
  {width}
  {height}
  viewBox="{-width / 2} {-height / 2} {width} {height}"
  on:click={() => currentPage.set(null)}
  on:keydown={(e) => e.key === "Escape" && currentPage.set(null)}
>
  <Background {width} {height} />
  <g id="graph">
    {#each nodes as node}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <circle
        class="node cursor-pointer"
        r={nodeRadius}
        fill={`${NODE_COLORS[node.page]}DD`}
        stroke={"#FFFFFF22"}
        stroke-width={2}
        cx={node.x}
        cy={node.y}
        on:click|stopPropagation={() => currentPage.set(node.page)}
        on:keydown|stopPropagation={(e) => e.key === "Enter" && currentPage.set(node.page)}
      />
      <text
        class="cursor-pointer"
        x={node.x}
        y={node.y}
        text-anchor="middle"
        dominant-baseline="middle"
        on:click|stopPropagation={() => currentPage.set(node.page)}
        on:keydown|stopPropagation={(e) => e.key === "Enter" && currentPage.set(node.page)}
        >{node.label}
      </text>
    {/each}
  </g></svg
>
