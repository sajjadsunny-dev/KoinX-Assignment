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
        'teamP': '#3E424A',
        'teamCardBg': '#E8F4FD',
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      fontSize: {
        '15px': '15px',
      },
      dropShadow: {
        'navbarShadow': '0 0 12px rgba(16, 38, 73, 0.06)',
        'sliderBtnShadow': '0 0 8px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '4.5': '4.5px',
        '5px': '5px',
        '14px': '14px',
        '15px': '15px',
        '17px': '17px',
        '26px': '26px',
        '30px': '30px',
        '42px': '42px',
        '60px': '60px',
        '68px': '68px',
        '327': '327px',
        '881': '881px',
      },
      borderRadius: {
        '10px': '10px',
        '7px': '7px',
      },
    },
  },
  plugins: [],
}