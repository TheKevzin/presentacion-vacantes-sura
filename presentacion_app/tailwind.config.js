/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sura-blue': '#0033A0',
        'sura-cyan': '#00B4E6',
        'sura-yellow': '#D1F500', 
        'sura-blue-vivo': '#2D6DF6',
        'sura-aqua': '#00AEC7',
        'sura-dark': '#002266',
        'sura-green': '#18C964',
        'sura-red': '#FF5A5A',
        'sura-gray': '#888B8D',
        'bg-primary': '#2D6DF6',
        'bg-secondary': '#DFEAFF',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
