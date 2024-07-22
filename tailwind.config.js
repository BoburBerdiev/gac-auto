/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
      },
    },
    extend: {
      colors: {
        'currentRed': '#e23535',
        'borderBtn': '#da0021',
        'currentGray': '#d7d6d6',
        'currentTextBlack':'#333'
      },
      boxShadow: {
        'aboutCard': '2px 2px 60px rgba(153, 153, 153, 0.43)',
        'modelColor': "inset 0px 1px 4px #545454"
      },
      screens: {
        '3xl': '1680px',
        "xs": "460px"
      },
      fontFamily: {
         montserrat: "var(--font-montserrat)",

      },
    },
  },
  plugins: [],
};
