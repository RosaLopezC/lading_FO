/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        brand: { 400: '#26bfb3', 500: '#00b4a8', 600: '#00a398', 700: '#008f86' },
        dark: { 900: '#050e0d', 800: '#091918', 700: '#0d2422', 600: '#112f2d' },
        gold: '#c9a84c',
      },
    },
  },
  plugins: [],
}
