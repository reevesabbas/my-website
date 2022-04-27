import React from 'react';
import type { NextPage } from 'next'
import { ReactDOM } from 'react';
import { useTheme } from 'next-themes';

import TextButton from '../components/Buttons/TextButton';
import Navbar from '../components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar> </Navbar>
    </div>
  )
}

export default Home