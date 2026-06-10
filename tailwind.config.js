/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#3D2B1F',
        'gold-yellow': '#F8B12F',
      }
    },
  },
  plugins: [],
}
