<script lang="ts">
  import { onMount } from "svelte"
  import { COLORS_NODE, NODES } from "$lib/constants"
  import { Simulation, type NodeDatum } from "./Simulation.svelte"

  interface Props {
    width: number
    height: number
    isTabbable?: boolean
  }

  let { width, height, isTabbable = true }: Props = $props()
  let tabIndex = $derived(isTabbable ? 0 : -1)

  let svg: SVGSVGElement

  const simulation = new Simulation(
    NODES.map((node) => ({ ...node, x: 0, y: 0, vx: 0, vy: 0 })),
    // svelte-ignore state_referenced_locally
    width,
    // svelte-ignore state_referenced_locally
    height,
  )

  onMount(() => {
    simulation.initDrag(svg)
  })
</script>

<svg
  bind:this={svg}
  {width}
  {height}
  viewBox="{-width / 2} {-height / 2} {width} {height}"
  class="absolute top-0 left-0"
>
  <g id="graph" role="navigation">
    {#each simulation.nodes as node}
      <a href={`/${node.page}`} tabindex={tabIndex}>
        <g class="node-group">
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
            font-family="Tomasito"
            font-size="30"
            >{node.label}
          </text>
        </g>
      </a>
    {/each}
  </g></svg
>
