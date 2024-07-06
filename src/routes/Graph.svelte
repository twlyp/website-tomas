<script lang="ts">
  import { onMount } from "svelte";
  import Background from "./Background.svelte";
  import { currentPage } from "./stores";
  import { NODE_COLORS } from "./constants";
  import { type NodeDatum, startSimulation } from "./dragSimulation";

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

  onMount(() =>
    startSimulation({
      nodes,
      nodeRadius,
      width,
      height,
      svg,
      refreshNodes: () => {
        nodes = [...nodes];
      },
    })
  );

  function onClickBackground() {
    currentPage.set(null);
  }

  function onKeydownBackground(event: KeyboardEvent) {
    if (event.key === "Escape") currentPage.set(null);
  }

  function onClickNode(node: NodeDatum) {
    currentPage.set(node.page);
  }

  function onKeydownNode(event: KeyboardEvent, node: NodeDatum) {
    if (event.key === "Enter") currentPage.set(node.page);
  }
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  on:click={onClickBackground}
  on:keydown|capture={onKeydownBackground}
/>

<svg
  bind:this={svg}
  {width}
  {height}
  viewBox="{-width / 2} {-height / 2} {width} {height}"
>
  <Background {width} {height} />
  <g id="graph" role="navigation">
    {#each nodes as node}
      <g
        class="node-group cursor-pointer"
        on:click|stopPropagation={() => onClickNode(node)}
        on:keydown|stopPropagation={(e) => onKeydownNode(e, node)}
        role="button"
        tabindex="0"
      >
        <circle
          class="node"
          r={nodeRadius}
          fill={`${NODE_COLORS[node.page]}DD`}
          stroke={"#FFFFFF22"}
          stroke-width={2}
          cx={node.x}
          cy={node.y}
        />
        <text
          x={node.x}
          y={node.y}
          text-anchor="middle"
          dominant-baseline="middle"
          >{node.label}
        </text>
      </g>
    {/each}
  </g></svg
>
