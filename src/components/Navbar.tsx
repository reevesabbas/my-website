import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { FaBars, FaCloudMoon } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'

import TextButton from './Buttons/TextButton'
import Link from 'next/link';

interface Props {
  children?: React.ReactNode
}

const Navbar: React.FC<Props> = () => {

  const [menu, setMenu] = useState(false);
  const {theme, setTheme} = useTheme();
  const handleClick = () => setMenu(!menu);

  return (
    <div className='fixed left-0 right-0 top-0 w-full h-[90px] flex justify-center items-center bg-lightestPurple dark:bg-darkestPurple z-10 drop-shadow-md dark:drop-shadow-none'>

      {/** Nav */}

      <div className='hidden md:flex'>
        <div className='pr-3 pl-5 pt-1 drop-shadow-lg'>
          {theme === 'dark' ? <BsFillSunFill size={30}> </BsFillSunFill> : <FaCloudMoon size={30} > </FaCloudMoon>}
        </div>
        <div className='flex space-x-[450px]'>
            <TextButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'dark' ? 'LIGHT' : 'DARK'}
            </TextButton>
          <div>
            <div className='flex space-x-8'>
              <a href='#projects'> <TextButton> PROJECTS </TextButton> </a>
              <a href='#contact'><TextButton> CONTACT </TextButton> </a>
              <Link href='/Abbas_Reeves.pdf'> 
                <a> <TextButton> RESUME </TextButton> </a>
              </Link> 
            </div>
          </div>
        </div>
      </div>


      {/** Mobile Hamburger */}

      <div className='md:hidden flex w-full justify-end pr-5 pt-2 z-10'>
        <button onClick={handleClick} className='hover:scale-110 hover:text-blue dark:hover:text-orange active:translate-y-0.5 active:text-darkBlue dark:active:text-darkerOrange ease-in-out duration-150 drop-shadow-lg'>
          {!menu ? <FaBars size={40} /> : <CgClose size={45} /> }
        </button>
      </div>


      {/**Mobile Nav */}
      
      <div className={!menu ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-lightPurple dark:bg-darkPurple flex flex-col justify-center items-center'}>
        <div className='flex flex-col space-y-9 text-center'>
          <a href='#home'> <TextButton onClick={() => setMenu(false)}> HOME </TextButton></a>
          <a className='pb-3'> <TextButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
          </TextButton></a>
          <a href='#projects'> <TextButton onClick={() => setMenu(false)}> PROJECTS </TextButton> </a>
          <a href='#contact'><TextButton onClick={() => setMenu(false)}> CONTACT </TextButton> </a>
          <Link href='/Abbas_Reeves.pdf'> 
            <a> <TextButton> RESUME </TextButton> </a>
          </Link> 
        </div>
      </div>


    </div>
  )
}

export default Navbar