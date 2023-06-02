module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      lightestPurple: '#f5f0ff',
      lightPurple: '#DBD0F2',
      gray: '#171A24',
      darkPurple: '#1A0144',
      darkGray: '#13151D',
      darkestGray: '#0D0E14',
      lightestBlue: '#B9D1FF',
      lightBlue: '#7098FE',
      blue: '#006FDC',
      darkBlue: '#003F7D',
      darkerBlue: '#002347',
      darkestBlue: '#122771',
      white: '#FFFFFF',
      black: '#000000',
      lighterGray: '#9c9aaa',
      lightGray: '#807E8C'
    },
    extend: {
      screens: {
        md: '1050px',
        sm: '675px'
      },
      fontFamily: {
        noto: ['Noto Sans'],
        inter: 'Inter',
        yeseva: 'Yeseva One',
        amiri: 'Amiri-Regular',
        fjalla: 'Fjalla-One'
      }
    }
  },
  plugins: []
};
