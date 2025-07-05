import * as d3 from "d3";

import { type PAGES } from "$constants";
import {
  createDragBehavior,
  getDraggedHandler,
  randomizeNodes,
  startSimulation,
} from "./dragSimulation";

export interface NodeDatum extends d3.SimulationNodeDatum {
  page: PAGES;
  label: string;
  radius: number;
}
export type LinkDatum = d3.SimulationLinkDatum<NodeDatum>;

export function useSimulation(width: number, height: number, inputNodes: NodeDatum[]) {
  let nodes = $state(randomizeNodes(inputNodes, width, height));
  let simulation = $state<d3.Simulation<NodeDatum, LinkDatum> | null>(null);
  let dragBehavior = $state<ReturnType<typeof createDragBehavior> | null>(null);

  const refreshNodes = () => {
    nodes = [...nodes];
  };

  function initSimulation(svg: SVGSVGElement) {
    simulation = startSimulation({
      nodes,
      svg,
      refreshNodes,
    });
    dragBehavior = createDragBehavior(svg, simulation);
    d3.select<SVGSVGElement, NodeDatum | undefined>(svg).call(dragBehavior);
  }

  function onResize(newWidth: number, newHeight: number) {
    dragBehavior?.on("drag", getDraggedHandler(newWidth, newHeight));
  }

  return { nodes, initSimulation, onResize };
}
