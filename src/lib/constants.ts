import * as d3 from "d3"

export const PAGES = {
  PHOTO: "photo",
  VIDEO: "video",
  EXHIBITIONS: "exhibitions",
  MUSIC: "music",
  BIO: "bio",
} as const
export type PAGES = (typeof PAGES)[keyof typeof PAGES]

const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

export const NODES = [
  { page: PAGES.PHOTO, label: "photo", radius: 100 },
  { page: PAGES.VIDEO, label: "video", radius: 80 },
  { page: PAGES.EXHIBITIONS, label: "exhibitions", radius: 70 },
  { page: PAGES.MUSIC, label: "music", radius: 60 },
  { page: PAGES.BIO, label: "bio", radius: 50 },
]

export const COLORS_NODE = {
  [PAGES.PHOTO]: colorScale("0"),
  [PAGES.VIDEO]: colorScale("1"),
  [PAGES.EXHIBITIONS]: colorScale("2"),
  [PAGES.MUSIC]: colorScale("3"),
  [PAGES.BIO]: colorScale("4"),
}

export const COLORS_PAGES_BACKGROUND = {
  // [PAGES.PHOTO]: "#FFFFFFCC",
  // [PAGES.VIDEO]: "#101010CC",
  [PAGES.PHOTO]: `${COLORS_NODE[PAGES.PHOTO]}AA`,
  [PAGES.VIDEO]: `${COLORS_NODE[PAGES.VIDEO]}AA`,
  [PAGES.MUSIC]: `${COLORS_NODE[PAGES.MUSIC]}AA`,
  [PAGES.EXHIBITIONS]: `${COLORS_NODE[PAGES.EXHIBITIONS]}AA`,
  [PAGES.BIO]: `${COLORS_NODE[PAGES.BIO]}AA`,
}

export const COLORS_BACKGROUND_GRADIENT = [
  { color: "#FF7F50", opacity: 0.7 },
  { color: "#FF4500", opacity: 0.6 },
  { color: "#FF1493", opacity: 0.5 },
]