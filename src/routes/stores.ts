import { writable } from "svelte/store";
import type { PAGES } from "./constants";

export const currentPage = writable<PAGES | null>(null);

export const viewportWidth = writable<number>();
export const viewportHeight = writable<number>();
