/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'narrow': '1070px', // любое нужное тебе значение
      },
    },
  },
  plugins: [],
}