/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				pink: {
					900: '#d7317e',
					800: '#ea4a94',
					700: '#fa6faf',
					400: '#f9d3e6',
					200: '#fff0f7',
				},
				green: {
					900: '#0b8f51',
					800: '#00a75c',
					700: '#3dba6b',
					400: '#cde6cf',
					300: '#def2e0',
					200: '#eaf7eb',
				},
				grey: {
					900: '#4b4a4d',
					800: '#969499',
					700: '#afaeb3',
					600: '#d5d2d9',
					500: '#e1dfe5',
					400: '#eeecf2',
					300: '#f2f0f5',
					200: '#f8f7fa',
					100: '#fdfcff',
				},
				red: {
					DEFAULT: '#eb5252',
					hover: '#fe5d5d',
					pressed: '#e52f2f',
					bg200: '#fae3e6',
					light100: '#fef2f2',
				},
				blue: {
					DEFAULT: '#007aff',
					hover: '#61adff',
					pressed: '#003cc7',
					light: '#90b5ff',
					bg200: '#e2ecff',
				},
				orange: {
					DEFAULT: '#f27a18',
					light: '#fcf2db',
				},
				overlay: {
					50: '#19191a80',
					30: '#19191a4d',
				},
				white: '#fff',
				black: '#19191a',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			const newUtilities = {
				'.label-shadow': {
					textShadow: '1px 0 0 var(--white), -1px 0 0 var(--white), 0 1px 0 var(--white), 0 -1px 0 var(--white), 2px 2px 0 var(--white), -2px 2px 0 var(--white), 2px -2px 0 var(--white), -2px -2px 0 var(--white), 3px 0 0 var(--white), -3px 0 0 var(--white), 0 3px 0 var(--white), 0 -3px 0 var(--white);',
				},
			}
			addUtilities(newUtilities, ['responsive', 'hover'])
		}
	],
}

