import * as d3 from "d3"
// @ts-expect-error - d3-force-boundary is not typed
import forceBoundary from "d3-force-boundary"
import { bindToInterval } from "$lib/utils"
import type { NodeDatum, LinkDatum } from "$lib/types"
import { getRadius } from "$lib/nodeTree"

type DragEvent = d3.D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>

const STRENGTH_CHARGE = 0.01
const STRENGTH_BOUNDARY = 0.002
const STRENGHT_COLLIDE = 0.1
const STRENGTH_LINK = 0.01
const DECAY_ALPHA = 0.01
const DECAY_VELOCITY = 0.04
const TARGET_ALPHA = 0.02

export class Simulation {
  private simulation!: d3.Simulation<NodeDatum, LinkDatum>
  private width = $state<number>(0)
  private height = $state<number>(0)
  nodes = $state<NodeDatum[]>([])
  links = $state<LinkDatum[]>([])
  dragBehavior?: d3.DragBehavior<SVGSVGElement, NodeDatum, NodeDatum | undefined>
  dragSubject!: (event: DragEvent) => NodeDatum | undefined
  dragStarted!: (event: DragEvent) => void
  dragged!: (event: DragEvent) => void
  dragEnded!: (event: DragEvent) => void

  get xRange() {
    return [-this.width / 2, this.width / 2] as const
  }

  get yRange() {
    return [-this.height / 2, this.height / 2] as const
  }

  get boundary() {
    return [this.xRange[0], this.yRange[0], this.xRange[1], this.yRange[1]] as const
  }

  constructor(nodes: NodeDatum[], width: number, height: number) {
    this.nodes = nodes
    this.width = width
    this.height = height
    this.startSimulation()
  }

  setForceCharge() {
    this.simulation.force("charge", d3.forceManyBody().strength(STRENGTH_CHARGE))
  }

  setForceCollide() {
    this.simulation.force(
      "collide",
      d3.forceCollide<NodeDatum>((d) => 1.1 * getRadius(d.layer)).strength(STRENGHT_COLLIDE),
    )
  }

  setForceBoundary() {
    this.simulation.force("boundary", forceBoundary(...this.boundary).strength(STRENGTH_BOUNDARY))
  }

  setForceLink() {
    this.simulation.force(
      "link",
      d3.forceLink<NodeDatum, LinkDatum>(this.links).strength(STRENGTH_LINK),
    )
  }

  startSimulation() {
    this.simulation = d3
      .forceSimulation<NodeDatum, LinkDatum>(this.nodes)
      .alphaDecay(DECAY_ALPHA)
      .velocityDecay(DECAY_VELOCITY)
      .alphaTarget(TARGET_ALPHA)
      .on("tick", () => this.simulation.tick())

    this.setForceCharge()
    this.setForceCollide()
    this.setForceBoundary()
    this.setForceLink()

    this.dragSubject = (event: DragEvent) => this.simulation.find(event.x, event.y)
    this.dragStarted = (event: DragEvent) => {
      if (!event.active) this.simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    }
    this.dragged = (event: DragEvent) => {
      event.subject.fx = bindToInterval(this.xRange, event.x)
      event.subject.fy = bindToInterval(this.yRange, event.y)
    }
    this.dragEnded = (event: DragEvent) => {
      if (!event.active) this.simulation.alphaTarget(0)
      event.subject.fx = null
      event.subject.fy = null
    }
  }

  initDrag(svg: SVGSVGElement) {
    this.dragBehavior = d3
      .drag<SVGSVGElement, NodeDatum, NodeDatum | undefined>()
      .container(svg)
      .subject(this.dragSubject)
      .on("start", this.dragStarted)
      .on("drag", this.dragged)
      .on("end", this.dragEnded)
    d3.select<SVGSVGElement, NodeDatum>(svg).call(this.dragBehavior)
  }

  addNode(currentNode: NodeDatum, newNode: NodeDatum) {
    this.nodes = [...this.nodes, newNode]
    this.links = [...this.links, { source: currentNode.index!, target: this.nodes.length - 1 }]
    this.simulation.nodes(this.nodes)
    this.setForceLink()
  }

  addChildren(node: NodeDatum) {
    if (!node.children) return
    const radius = 2 * (getRadius(node.layer) + getRadius(node.layer + 1)) + 10
    const nSteps = node.children.length
    const children = node.children.map((child, i) => {
      const x = node.x! + radius * Math.cos(((2 * Math.PI) / nSteps) * i)
      const y = node.y! + radius * Math.sin(((2 * Math.PI) / nSteps) * i)
      const v = -1
      return {
        ...child,
        layer: node.layer + 1,
        x,
        y,
        vx: x + v * Math.cos(((2 * Math.PI) / nSteps) * i),
        vy: y + v * Math.sin(((2 * Math.PI) / nSteps) * i),
      }
    })
    const nNodes = this.nodes.length
    this.nodes = [...this.nodes, ...children]
    this.links = [
      ...this.links,
      ...children.map((_, i) => ({ source: node.index!, target: nNodes + i })),
    ]
    this.simulation.nodes(this.nodes)
    this.setForceLink()
  }

  removeNode(label: string) {
    this.nodes = this.nodes.filter((n) => n.label !== label)
    this.links = this.links.filter(
      (l) => (l.source as NodeDatum).label !== label && (l.target as NodeDatum).label !== label,
    )
    this.simulation.nodes(this.nodes)
    this.setForceLink()
  }
}
