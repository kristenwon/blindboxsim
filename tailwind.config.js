/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fifth: ['"5th Avenue"', 'sans-serif'],
        yuji: ['"Yuji Syuku"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
