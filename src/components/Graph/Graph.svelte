<script lang="ts">
  import { onMount } from "svelte";
  import { COLORS_NODE } from "$constants";
  import {
    type NodeDatum,
    randomizeNodes,
    startSimulation,
  } from "./dragSimulation";
  import { goto } from "$app/navigation";

  interface Props {
    nodes: NodeDatum[];
    width: number;
    height: number;
  }

  let { nodes: inputNodes, width, height }: Props = $props();

  let svg: SVGSVGElement;

  let nodes = $state(randomizeNodes(inputNodes, width, height));

  onMount(() =>
    startSimulation({
      nodes,
      width,
      height,
      svg,
      refreshNodes: () => {
        nodes = [...nodes];
      },
    })
  );


  function onKeydownBackground(event: KeyboardEvent) {
    if (event.key === "Escape") goto("/");
  }

  function onClickNode(event: MouseEvent, node: NodeDatum) {
    goto(`/${node.page}`);
  }

  function onKeydownNode(event: KeyboardEvent, node: NodeDatum) {
    if (event.key === "Enter") goto(`/${node.page}`);
  }
</script>

<svelte:window
  onkeydowncapture={onKeydownBackground}
/>

<svg
  bind:this={svg}
  {width}
  {height}
  viewBox="{-width / 2} {-height / 2} {width} {height}"
  class="absolute top-0 left-0"
>
  <g id="graph" role="navigation">
    {#each nodes as node}
      <g
        class="node-group cursor-pointer"
        onclick={(e) => onClickNode(e, node)}
        onkeydown={(e) => onKeydownNode(e, node)}
        role="button"
        tabindex="0"
      >
        <circle
          class="node"
          r={node.radius}
          fill={`${COLORS_NODE[node.page]}DD`}
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
