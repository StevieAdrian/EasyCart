/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FD0000',
        'electricBlue': '#4E53EE',
        'grey': '#9E9E9E', // set opacity-50
      },

    },
  },
  plugins: [],
};
