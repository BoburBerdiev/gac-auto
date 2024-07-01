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
        'currentGray': '#d7d6d6',
        'currentTextBlack':'#333'
      },
      // fontFamily: {
      //   elegance: ['var(--font-el_messiri)'],
      //   roboto: ['var(--font-open-sans)'],
      //   alegreya: ['var(--font-open-sans)'],
      //   openSans: ['var(--font-open-sans)']
      // },
    },
  },
  plugins: [],
};
