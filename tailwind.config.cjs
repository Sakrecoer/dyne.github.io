/** @type {import('tailwindcss').Config} */

module.exports = {
		mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: 'var(--accent-color)',
				primary: {
					DEFAULT: '#F4CC9C',
					light: '#FEFBF6',
					80: '#F6D6B0',
					60: '#F8E0C4',
					40: '#FBEBD7',
					20: '#FDF5EB',
					10: '#FEFAF5',
					5: '#FEFCFA',
				},
				secondary: {
					DEFAULT: '#4843EB',
					light: '#CBC8FA',
					80: '#6D69EF',
					60: '#918EF3',
					40: '#B6B4F7',
					20: '#DAD9FB',
					10: '#EDECFD',
					5: '#F6F6FE',
				},
				tertiary: {
					DEFAULT: '#154B45',
					light: '#3BC7B7',
					80: '#1C6058',
					60: '#22746B',
					40: '#28897E',
					20: '#2E9E91',
					10: '#35B3A4',
					5: '#3BC7B7',
				},
				black: {
					DEFAULT: '#000000',
					light: '#25282B',
					80: '#52575C',
					60: '#A0A4A8',
					40: '#CACCCF',
					20: '#DBDDE0',
					10: '#E8E8E8',
					5: '#F9F9FA',
				},
				gray: {
					DEFAULT: '#B0B0B0',
					light: '#FCFCFC',
					80: '#B0B0B0',
					60: '#BDBDBD',
					40: '#C9C9C9',
					20: '#D6D6D6',
					10: '#F0F0F0',
					5: '#FCFCFC',
				}
			},
			fontFamily: {
				sans: ["Syne", "sans"],
				serif: ["Syne Tactile", "cursive"],
			},
			fontSize: {
				'mega': ['5.75rem', {
					lineHeight: '13.625rem',
					letterSpacing: '-0.02rem',
					fontWeight: '600',
				}],
			}, 
            letterSpacing: {
                normal: '-0.2rem',
            }
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
