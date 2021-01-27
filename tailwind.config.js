const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			gridColumn: {
				1: "1",
			},
			colors: {
				"black-opaque": "rgba(0, 0, 0, 0.7)",
			},
			maxHeight: {
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
			},
		},
	},
	variants: {},
	plugins: [],
};
