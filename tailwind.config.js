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
			transparent: 'rgba(0, 0, 0, 0)',
		},
		extend: {
			backgroundImage: {
				heroMobile: `url('/assets/home/mobile/image-header.jpg')`,
				heroTablet: `url('/assets/home/tablet/image-header.jpg')`,
				heroDesktop: `url('/assets/home/desktop/image-hero.jpg')`,
				circlesPattern: 'url("/assets/shared/pattern-circles.svg")',
				homeZx7Mobile: 'url("/assets/home/mobile/image-speaker-zx7.jpg")',
				homeZx7Tablet: 'url("/assets/home/tablet/image-speaker-zx7.jpg")',
				homeZx7Desktop: 'url("/assets/home/desktop/image-speaker-zx7.jpg")',
				homeYx1Mobile: 'url("/assets/home/mobile/image-earphones-yx1.jpg")',
			},
		},
	},
	plugins: [],
};
