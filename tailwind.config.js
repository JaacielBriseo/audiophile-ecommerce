/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			orange: {
				300: '#FBAF85',
				600: '#D87D4A',
			},
			red: {
				600: '#CD2C2C',
			},
			white: {
				100: '#FFFFFF',
				200: '#FAFAFA',
				400: '#F1F1F1',
			},
			black: {
				200: '#CFCFCF',
				400: '#979797',
				600: '#4c4c4c',
				800: '#101010',
				900: '#000000',
			},
		},
		extend: {},
	},
	plugins: [],
};
