module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'lightestPurple': '#ECE7F8',
      'lightPurple': '#DBD0F2',
      'purple': '#733FE3',
      'darkPurple': '#1A0144',
      'darkestPurple': '#080014',
      'lightOrange': '#FFD3C5',
      'orange': '#FE5E19',
      'darkOrange': '#9C2500',
      'darkerOrange': '#4D1700',
      'lightestBlue': '#B9D1FF',
      'lightBlue': '#7098FE',
      'blue': '#006FDC',
      'darkBlue': '#003F7D',
      'darkerBlue': '#002347',
      'darkestBlue': '#122771',
      'white': '#FFFFFF',
      'black': '#000000'
    },
    extend: {
      fontFamily: {
        yeseva: 'Yeseva One',
        amiri: 'Amiri-Regular',
        fjalla: 'Fjalla-One'
      }
    },
  },
  plugins: [],
}