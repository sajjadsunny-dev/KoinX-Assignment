/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1328px',
      },
      colors: {
        'primary': '#0052FE',
        'navLinkColor': '#0F1629',
        'GetStartedPara': '#F2F2F2',
        'trendingGreen': '#14B079',
        'trendingCardBorder': '#E3E3E3',
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      dropShadow: {
        'navbarShadow': '0 0 12px rgba(16, 38, 73, 0.06)',
      },
      spacing: {
        '4.5': '4.5px',
        '5px': '5px',
        '14px': '14px',
        '17px': '17px',
        '26px': '26px',
        '30px': '30px',
        '68px': '68px',
        '327': '327px',
      },
      borderRadius: {
        '10px': '10px',
      }
    },
  },
  plugins: [],
}