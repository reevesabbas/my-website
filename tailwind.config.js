module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    colors: {
      'darkestPurple': '#06001F',
      'darkOrange': '#8C2B00',
      'darkerOrange': '#4D1700',
      'darkBlue': '#003F7D',
      'darkerBlue': '#002347',
      'white': '#FFFFFF'
    },
    extend: {
      fontFamily: {
        amiri: 'Amiri-Bold'
      }
    },
  },
  plugins: [],
}