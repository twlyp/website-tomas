import type { Snippet } from "svelte"

export interface ChildrenProp {
  children: Snippet
}

export interface HTMLProps {
  class?: string
  id?: string
  style?: string
}

export interface NodeDatum extends d3.SimulationNodeDatum {
  label: string
  layer: number
  children?: NodeDatum[]
  isOpen?: boolean
}

export type LinkDatum = d3.SimulationLinkDatum<NodeDatum>