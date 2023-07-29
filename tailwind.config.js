/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			tablet: '481px',
			laptop: '769px',
			desktop: '1025px'
		},
		extend: {
			colors: {
				surface: '#FAF3DD',
				'surface-10': '#F2E9D5',
				'surface-20': '#EAE0C1',
				'surface-30': '#E2D7AD',
				primary: '#333333',
				'primary-10': '#2C2C2C',
				'primary-20': '#262626',
				'primary-30': '#1F1F1F',
				secondary: '#E9F2D5',
				'secondary-10': '#E0E9C1',
				'secondary-20': '#D7E2AD',
				'secondary-30': '#CEDA99',
				accent: '#B5838D',
				'accent-10': '#AD7A84',
				'accent-20': '#A3717B',
				'accent-30': '#9B6872',
				success: '#498467',
				'success-10': '#427A5E',
				'success-20': '#3B7255',
				'success-30': '#34694C',
				warning: '#F2CC8F',
				'warning-10': '#E9C381',
				'warning-20': '#E0BA73',
				'warning-30': '#D7B265',
				error: '#D96459',
				'error-10': '#D05B50',
				'error-20': '#C85247',
				'error-30': '#C0493E'
			},
			fontFamily: {
				primary: ['SourceCodePro', 'Roboto', 'sans-serif']
			}
		}
	},
	plugins: []
};
