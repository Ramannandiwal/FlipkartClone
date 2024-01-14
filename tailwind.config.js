/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buttonhover':'#5400ea',
        'navcolor':"#4e46f5",
        }
    },
  },
  plugins: [],
}