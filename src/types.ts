import type { Snippet } from "svelte";

export interface ChildrenProp {
	children: Snippet;
}

export interface HTMLProps {
	class?: string;
	style?: string;
}