/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-dark-green": "#3F513B",
        "c-mid-green": "#609966",
        "c-light-green": "#9DC08A",
        "c-cream": "#EDF1D6",
        "c-light-cream": "#F7F0F0",
        "c-black": "#484349",
      },
      fontFamily: {
        poppins: ["Poppins"],
        aksara: ["Aksara"],
        righteous: ["Righteous"],
      },
      backgroundImage: {
        hero: "url('./assets/images/bg-hero.png')",
      },
    },
  },
  plugins: [],
};
