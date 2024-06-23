import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			animation: {
				"bg-gradient": "bg-gradient 5s ease infinite",
			},
			keyframes: {
				"bg-gradient": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
} as Config;
