import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage:{
			'btn-gradient': 'linear-gradient(89.51deg, #761EFE -22.31%, #A22CFC 3.65%, #766BF3 51.69%, #38C1E5 111.57%)',
			'music-card-gradient':'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',

		},

		fontFamily: {
			monoBold: 'var(--font-mont-bold)',
			monoLight: 'var(--font-mont-light)',
		  poppins:'var(--font-poppins)'
		},
  		animation: {
  			'spin-slow': 'spin 7s linear infinite',
  			flash: 'flash 2.5s infinite',
  			'loop-scroll': 'loop-scroll 80s linear infinite',
			'gradient-spin': 'gradientSpin 2s linear infinite',
  		},
  		keyframes: {
			gradientSpin: {
				"0%": { borderColor: "#761EFE transparent #A22CFC transparent" },
				"25%": { borderColor: "#A22CFC transparent #766BF3 transparent" },
				"50%": { borderColor: "#766BF3 transparent #38C1E5 transparent" },
				"75%": { borderColor: "#38C1E5 transparent #761EFE transparent" },
				"100%": { borderColor: "#761EFE transparent #A22CFC transparent" },
			  },
  			'loop-scroll': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		colors: {
  			'brand-light': '#1261A0',
			'brand-primary': '#0b0e1f',
  			'brand-beige': '#BBAA89',
			'brand-mouve':'#302D4B',
  			'brand-odd': '#58CCED',
			'brand-gray':'#fffdf9',
  			'brand-base-color': '#072F5F',
  			'brand-hue-color': '#3895D3',
			'brand-brew': '#03FCFD',
			'brand-rcc': '#211f3a',
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
