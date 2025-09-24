import { NODE_INITIAL_VELOCITY } from "$lib/constants"
import type { NodeDatum } from "./Simulation.svelte"

export function randomizeNodes(nodes: NodeDatum[], width: number, height: number): NodeDatum[] {
  return nodes.map((d) => ({
    ...d,
    x: Math.random() * width - width / 2,
    y: Math.random() * height - height / 2,
    vx: Math.random() * NODE_INITIAL_VELOCITY,
    vy: Math.random() * NODE_INITIAL_VELOCITY,
  }))
}
