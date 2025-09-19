import { writable } from "svelte/store"
import type { PAGES } from "./constants"

export const currentPage = writable<PAGES | null>(null)
