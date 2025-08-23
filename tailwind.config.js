/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        'akira': ['Akira Expanded'],
        'haas': ['Neue Haas Display Light'],
        'haas-black': ['Neue Haas Display Black'],
        'haas-med': ['Neue Haas Display Med'],
      },
    },
  },
  plugins: [],
}
