
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Rugby School Thailand color palette
				darkBlue: {
					DEFAULT: '#002E5D',
					50: '#E6EBF2',
					100: '#CCd7E5',
					200: '#99AFCB',
					300: '#6687B1', 
					400: '#335E97',
					500: '#002E5D',
					600: '#00254A',
					700: '#001C38',
					800: '#001225',
					900: '#000912'
				},
				accentBlue: {
					DEFAULT: '#005EB8',
					50: '#E6F0F9',
					100: '#CCE1F3',
					200: '#99C3E7',
					300: '#66A5DB',
					400: '#3387CF',
					500: '#005EB8',
					600: '#004B93',
					700: '#00386E',
					800: '#00264A',
					900: '#001325'
				},
				softGray: {
					DEFAULT: '#F4F4F4',
					50: '#FEFEFE',
					100: '#FCFCFC',
					200: '#F9F9F9',
					300: '#F7F7F7',
					400: '#F4F4F4',
					500: '#E8E8E8',
					600: '#D1D1D1',
					700: '#B0B0B0',
					800: '#7B7B7B',
					900: '#454545'
				},
				textGray: {
					DEFAULT: '#4A4A4A',
					50: '#F2F2F2',
					100: '#E5E5E5',
					200: '#CCCCCC',
					300: '#B2B2B2',
					400: '#999999',
					500: '#7F7F7F',
					600: '#666666',
					700: '#4A4A4A',
					800: '#333333',
					900: '#1A1A1A'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'zoom-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-delayed': 'fade-in 0.7s ease-out 0.3s forwards',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'fade-in-left': 'fade-in-left 0.5s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
			},
			height: {
				'120': '30rem',
				'screen-80': '80vh',
				'screen-90': '90vh',
			},
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
