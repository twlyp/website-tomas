import * as d3 from "d3"
import { type PAGES } from "$lib/constants"
// @ts-expect-error - d3-force-boundary is not typed
import forceBoundary from "d3-force-boundary"
import { bindToInterval } from "$lib/utils"

export interface NodeDatum extends d3.SimulationNodeDatum {
  page: PAGES
  label: string
  radius: number
}
export type LinkDatum = d3.SimulationLinkDatum<NodeDatum>
type DragEvent = d3.D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>

const STRENGTH_BOUNDARY = 0.002
const DECAY_ALPHA = 0.02
const DECAY_VELOCITY = 0.02
const TARGET_ALPHA = 0.2

export class Simulation {
  private simulation!: d3.Simulation<NodeDatum, LinkDatum>
  private width = $state<number>(0)
  private height = $state<number>(0)
  nodes = $state<NodeDatum[]>([])
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

  startSimulation() {
    this.simulation = d3
      .forceSimulation<NodeDatum, LinkDatum>(this.nodes)
      .alphaDecay(DECAY_ALPHA)
      .velocityDecay(DECAY_VELOCITY)
      .alphaTarget(TARGET_ALPHA)
      .force("charge", d3.forceManyBody())
      .force(
        "collide",
        d3.forceCollide((d) => d.radius),
      )
      .force("boundary", forceBoundary(...this.boundary).strength(STRENGTH_BOUNDARY))
      .on("tick", () => this.simulation.tick())

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
}
