/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Public Sans"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        heroPattern: "url('/src/assets/images/bg-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
