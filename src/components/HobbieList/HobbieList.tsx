import React, { useMemo, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import ListItem from './ListItem'
import NavButton from './NavButton'
import IconButton from '../Buttons/IconButton'
import { GAMES, ANIME, ALBUMS } from '../../assets/Hobbies'

const HobbieList = () => {

  const [showHobbies, setShowHobbies] = useState(false);
  const [currHobby, setCurrHobby] = useState(ALBUMS);


  return (
    <div className='divide-y divide-lightGray dark:bg-[#1d173b] bg-lightestPurple rounded-md drop-shadow-lg'>
      
      <nav className='h-fit flex justify-end py-4 px-6 space-x-4'>
        <div className='flex justify-start w-full h-8'>
          <IconButton Icon={IoIosArrowDown} size={35} onClick={() => {setShowHobbies(!showHobbies)}} addStyle={`${!showHobbies ? 'rotate-0' : '-rotate-180'}`} />
        </div>
        <NavButton onClick={() => setCurrHobby(ALBUMS)} active={currHobby === ALBUMS ? true : false}> MUSIC </NavButton>
        <NavButton onClick={() => setCurrHobby(GAMES)} active={currHobby === GAMES ? true : false}> GAMES </NavButton>
        <NavButton onClick={() => setCurrHobby(ANIME)} active={currHobby === ANIME ? true : false}> ANIME </NavButton>
      </nav>
      
      <div className={`justify-center mx-7 mb-7 ${ !showHobbies ? 'hidden' : 'flex'}`}>

      <ListItem hobby={currHobby} w={200} h={currHobby === ANIME ? 300 : 200} />

      </div>
    </div>
  )
}

export default HobbieList