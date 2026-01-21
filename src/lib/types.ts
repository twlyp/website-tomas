import type { Snippet } from "svelte"
import type { TreeNode } from "./nodeTree"

export interface ChildrenProp {
  children: Snippet
}

export interface HTMLProps {
  class?: string
  id?: string
  style?: string
}

export type NodeDatum = d3.SimulationNodeDatum &
  TreeNode & {
    layer: number
  }

export type LinkDatum = d3.SimulationLinkDatum<NodeDatum>
