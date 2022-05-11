import React from 'react'
import ListItem from './ListItem'
import {SiTypescript} from 'react-icons/si'
import NavButton from './NavButton'


const HobbieList = () => {
  return (
    <div className='divide-y divide-[#6e6f7c] dark:bg-[#22204b] bg-[#a7afdf] rounded-md'>
      <nav className='mt-5 py-5 px-4 space-x-4'>
        <NavButton> NavButton </NavButton>
        <NavButton> NavButton </NavButton>
        <NavButton> NavButton </NavButton>
      </nav>
      <ul className='flex flex-row space-x-14 justify-center py-7'>
        <li> <SiTypescript size={100} /> <p className='text-center pt-2'> Example </p> </li>
        <li> <SiTypescript size={100} /> </li>
      </ul>
    </div>
  )
}

export default HobbieList