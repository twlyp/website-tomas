import * as d3 from "d3";
import { NODE_INITIAL_VELOCITY, type PAGES } from "./constants";
// @ts-expect-error - d3-force-boundary is not typed
import forceBoundary from "d3-force-boundary";
import { bindToInterval } from "./utils";

export interface NodeDatum extends d3.SimulationNodeDatum {
	page: PAGES;
	label: string;
}
export type LinkDatum = d3.SimulationLinkDatum<NodeDatum>;
type DragEvent = d3.D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>;

const STRENGTH_BOUNDARY = 0.002;
const DECAY_ALPHA = 0.02;
const DECAY_VELOCITY = 0.02;
const TARGET_ALPHA = 0.2;

export function startSimulation({
	nodes,
	nodeRadius,
	width,
	height,
	svg,
	refreshNodes,
}: {
	nodes: NodeDatum[];
	nodeRadius: number;
	width: number;
	height: number;
	svg: SVGSVGElement;
	refreshNodes: (nodes: NodeDatum[]) => void;
}) {
	const halfWidth = width / 2;
	const halfHeight = height / 2;

	const simulation = d3
		.forceSimulation<NodeDatum, LinkDatum>(nodes)
		.alphaDecay(DECAY_ALPHA)
		.velocityDecay(DECAY_VELOCITY)
		.alphaTarget(TARGET_ALPHA)
		.force("charge", d3.forceManyBody())
		.force("collide", d3.forceCollide(nodeRadius))
		.force("boundary", forceBoundary(-halfWidth, -halfHeight, halfWidth, halfHeight).strength(STRENGTH_BOUNDARY))
		.on("tick", simulationUpdate);

	d3.select(svg as Element).call(
		d3.drag().container(svg).subject(dragSubject).on("start", dragStarted).on("drag", dragged).on("end", dragEnded),
	);

	function simulationUpdate() {
		simulation.tick();
		refreshNodes(nodes);
	}

	function dragSubject(event: DragEvent) {
		return simulation.find(event.x, event.y, nodeRadius);
	}

	function dragStarted(event: DragEvent) {
		if (!event.active) simulation.alphaTarget(0.3).restart();
		event.subject.fx = event.subject.x;
		event.subject.fy = event.subject.y;
	}

	function dragged(event: DragEvent) {
		event.subject.fx = bindToInterval(-halfWidth, halfWidth, event.x);
		event.subject.fy = bindToInterval(-halfHeight, halfHeight, event.y);
	}

	function dragEnded(event: DragEvent) {
		if (!event.active) simulation.alphaTarget(0);
		event.subject.fx = null;
		event.subject.fy = null;
	}
}

export function randomizeNodes(nodes: NodeDatum[], width: number, height: number) {
	return nodes.map((d) => ({
		...d,
		x: Math.random() * width - width / 2,
		y: Math.random() * height - height / 2,
		vx: Math.random() * NODE_INITIAL_VELOCITY,
		vy: Math.random() * NODE_INITIAL_VELOCITY,
	}));
}
