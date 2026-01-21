<script lang="ts">
  import { onMount } from "svelte"
  import { Simulation } from "./Simulation.svelte"
  import { getRadius, nodeTree } from "$lib/nodeTree"
  import type { NodeDatum } from "$lib/types"

  interface Props {
    width: number
    height: number
    isTabbable?: boolean
  }

  let { width, height, isTabbable = true }: Props = $props()
  let tabIndex = $derived(isTabbable ? 0 : -1)

  let svg: SVGSVGElement

  const simulation = new Simulation(
    nodeTree.map((node) => ({
      ...node,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      layer: 0,
    })) as NodeDatum[],
    // svelte-ignore state_referenced_locally
    width,
    // svelte-ignore state_referenced_locally
    height,
  )

  onMount(() => {
    simulation.initDrag(svg)
  })

  function onNodeClick(node: NodeDatum) {
    if (node.children) {
      if (node.isOpen) {
        node.children.forEach((child) => simulation.removeNode(child.label))
      } else {
        node.children.forEach((child) =>
          simulation.addNode(node, { ...child, layer: node.layer + 1 }),
        )
      }
      node.isOpen = !node.isOpen
    } else {
      console.log("node.slug")
    }
  }
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
      <g
        class="node-group"
        role="button"
        tabindex={tabIndex}
        onclick={() => onNodeClick(node)}
        onkeydown={(ev) => {
          ev.key === "Enter" && onNodeClick(node)
        }}
      >
        <circle
          class="node"
          r={getRadius(node.layer)}
          fill={"hotpink"}
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
    {/each}
  </g></svg
>
