import React, { useState } from 'react'
import { useTheme } from 'next-themes';
import { FaBars, FaCloudMoon } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'

import TextButton from '../Buttons/TextButton'

interface Props {
  children: React.ReactNode
}

const Navbar: React.FC<Props> = () => {

  const [menu, setMenu] = useState(false);
  const {theme, setTheme} = useTheme();
  const handleClick = () => setMenu(!menu);
  
  return (
    <div className='fixed w-full h-[70px] md:h-[90px] flex justify-center items-center bg-lightestPurple dark:bg-darkestPurple z-10 md:drop-shadow-md dark:drop-shadow-none'>

      {/** Nav */}

      <div className='hidden md:flex'>
        <div className='pr-3 pl-5 pt-1 drop-shadow-lg'>
          {theme === 'dark' ? <BsFillSunFill size={30}> </BsFillSunFill> : <FaCloudMoon size={30} > </FaCloudMoon>}
        </div>
        <div className='flex space-x-[200px] lg:space-x-[450px]'>
            <TextButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'dark' ? 'LIGHT' : 'DARK'}
            </TextButton>
          <div>
            <ul className='flex space-x-8'>
              <li> <TextButton> CONTACT </TextButton> </li>
              <li><TextButton> RESUME </TextButton> </li>
              <li><TextButton> INTERESTS </TextButton> </li>
            </ul>
          </div>
        </div>
      </div>


      {/** Mobile Hamburger */}

      <div className='md:hidden flex w-full justify-end pr-5 pt-2 z-10'>
        <button onClick={handleClick} className='hover:scale-110 hover:text-blue dark:hover:text-orange active:translate-y-0.5 active:text-darkBlue dark:active:text-darkerOrange ease-in-out duration-150 drop-shadow-lg'>
          {!menu ? <FaBars size={30} /> : <CgClose size={35} /> }
        </button>
      </div>


      {/**Mobile Nav */}
      
      <div className={!menu ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-lightPurple dark:bg-darkerPurple flex flex-col justify-center items-center'}>
        <ul className='space-y-6 text-center'>
          <li> <TextButton> HOME </TextButton></li>
          <li className='pb-3'> <TextButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
          </TextButton></li>
          <li> <TextButton> CONTACT </TextButton> </li>
          <li> <TextButton> RESUME </TextButton> </li>
          <li> <TextButton> INTERESTS </TextButton> </li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar