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
        brand: { 400: '#ff9a4d', 500: '#f57e1d', 600: '#e56a00', 700: '#cc5500' },
        dark: { 900: '#050812', 800: '#0a1420', 700: '#0d1c35', 600: '#0f2847' },
        gold: '#005097',
      },
    },
  },
  plugins: [],
}
