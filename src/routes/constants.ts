import * as d3 from "d3";

export enum PAGES {
	PHOTO = "photo",
	VIDEO = "video",
	EXHIBITIONS = "exhibitions",
	MUSIC = "music",
	BIO = "bio",
}

const colorScale = d3.scaleOrdinal(d3.schemeCategory10);


export const NODES = [
	{ page: PAGES.PHOTO, label: "photo" },
	{ page: PAGES.VIDEO, label: "video" },
	{ page: PAGES.EXHIBITIONS, label: "exhibitions" },
	{ page: PAGES.MUSIC, label: "music" },
	{ page: PAGES.BIO, label: "bio" },
];

export const COLORS_NODE = {
	[PAGES.PHOTO]: colorScale("0"),
	[PAGES.VIDEO]: colorScale("1"),
	[PAGES.EXHIBITIONS]: colorScale("2"),
	[PAGES.MUSIC]: colorScale("3"),
	[PAGES.BIO]: colorScale("4"),
};

export const COLORS_PAGES_BACKGROUND = {
	[PAGES.PHOTO]: "#FFFFFFCC",
	[PAGES.VIDEO]: "#101010CC",
	[PAGES.MUSIC]: `${COLORS_NODE[PAGES.MUSIC]}AA`,
	[PAGES.EXHIBITIONS]: `${COLORS_NODE[PAGES.EXHIBITIONS]}AA`,
	[PAGES.BIO]: `${COLORS_NODE[PAGES.BIO]}AA`,
};

export const NODE_INITIAL_VELOCITY = 50;
