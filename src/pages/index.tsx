import React from 'react';
import type { NextPage } from 'next'
import { ReactDOM } from 'react';
import { useTheme } from 'next-themes';

import TextButton from '../components/Buttons/TextButton';
import ThemeButton from '../components/Buttons/ThemeButton';

const Home: NextPage = () => {
  const {theme, setTheme} = useTheme();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <TextButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'LIGHT' : 'DARK'}
      </TextButton>
    </div>
  )
}

export default Home