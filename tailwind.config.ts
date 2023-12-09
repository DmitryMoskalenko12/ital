import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
     xs: "320px",
     md: '767px',
     mdx: '991px',
     lg: '1199px',
     xl: '1399px'
    },
    extend: {
      container: {
        center: true,
        screens: {
          xs: '100%',
          md: '720px',
          mdx: '991px',
          lg: '1140px',
          xl: '1320px'
        },
      },
      colors: {
        blackMain: '#424242',
        hakki: '#D8B152',
        bg: '#202020'
      },
      
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

export default config
