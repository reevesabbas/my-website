module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'lightestPurple': '#f5f0ff',
      'lightPurple': '#DBD0F2',
      'gray': '#212635',
      'darkPurple': '#1A0144',
      'darkGray': '#181b25',
      'darkestGray': '#12141C',
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
      'black': '#000000',
      'lighterGray': '#9c9aaa',
      'lightGray': '#807E8C',
    },
    extend: {
      screens: {
        md: '1050px',
        sm: '675px'
      },
      fontFamily: {
        noto: ['Noto Sans'],
        roboto: 'Roboto',
        yeseva: 'Yeseva One',
        amiri: 'Amiri-Regular',
        fjalla: 'Fjalla-One',
      },

    },
  },
  plugins: [],
}