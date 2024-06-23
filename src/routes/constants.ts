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
	{ page: PAGES.PHOTO, label: "photo", color: colorScale("0") },
	{ page: PAGES.VIDEO, label: "video", color: colorScale("1") },
	{ page: PAGES.EXHIBITIONS, label: "exhibitions", color: colorScale("2") },
	{ page: PAGES.MUSIC, label: "music", color: colorScale("3") },
	{ page: PAGES.BIO, label: "bio", color: colorScale("4") },
];
