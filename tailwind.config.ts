import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
     xs: "320px",
     md: '767px',
     lg: '1199px',
     xl: '1399px'
    },
    extend: {
      container: {
        screens: {
          xs: '100%',
          md: '720px',
          lg: '1140px',
          xl: '1320px'
        },
      },
      colors: {
        hakki: '#D8B152'
      },
      
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      },

      backgroundImage: {
        
      },
    },
  },
  plugins: [],
}

export default config
