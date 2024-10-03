/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        abril: ['Abril Fatface', 'serif'],
        lato: ['Lato', 'sans-serif'],
        losta: ['LostaMasta', 'sans-serif'],
      },
    },
  },
  plugins: [],
};