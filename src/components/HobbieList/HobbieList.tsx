import React from 'react'
import ListItem from './ListItem'
import {SiTypescript} from 'react-icons/si'
import NavButton from './NavButton'


const HobbieList = () => {
  return (
    <div className='divide-y divide-lighterGray dark:bg-[#1d173b] bg-lightestPurple rounded-md'>
      <nav className='mt-5 py-3 px-6 space-x-4'>
        <NavButton> GAMES </NavButton>
        <NavButton> ANIME </NavButton>
        <NavButton> MUSIC </NavButton>
      </nav>
      <ul className='flex flex-row space-x-14 justify-center py-7'>
      </ul>
    </div>
  )
}

export default HobbieList