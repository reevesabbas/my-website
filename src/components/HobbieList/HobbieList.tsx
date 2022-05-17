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
      
      <nav className='h-fit flex justify-end mt-5 py-4 px-6 space-x-4'>
        <div className='flex justify-start w-full h-8'>
          <IconButton Icon={IoIosArrowDown} size={35} onClick={() => {setShowHobbies(!showHobbies)}} addStyle={`${!showHobbies ? 'rotate-0' : '-rotate-90'}`} />
        </div>
        <NavButton onClick={() => setCurrHobby(ALBUMS)} addStyle={`${currHobby === ALBUMS ? 'dark:bg-darkOrange bg-darkBlue border-0 text-white scale-110 dark:text-white' : 'dark:text-lighterGray hover:scale-[5px] scale-90 border-[1.5px]'}`}> MUSIC </NavButton>
        <NavButton onClick={() => setCurrHobby(GAMES)} addStyle={`${currHobby === GAMES ? 'dark:bg-darkOrange bg-darkBlue border-0 text-white scale-110 dark:text-white' : 'dark:text-lighterGray hover:scale-[5px] scale-90 border-[1.5px]'}`}> GAMES </NavButton>
        <NavButton onClick={() => setCurrHobby(ANIME)} addStyle={`${currHobby === ANIME ? 'dark:bg-darkOrange bg-darkBlue border-0 text-white scale-110 dark:text-white' : 'dark:text-lighterGray hover:scale-[5px] scale-90 border-[1.5px]'}`}> ANIME </NavButton>
      </nav>
      
      <div className={`justify-center p-7 ${ !showHobbies ? 'hidden' : 'flex'}`}>

        <div className={`${currHobby === ALBUMS ? 'block h-96' : 'hidden'}`}>
          <ListItem hobby={ALBUMS} w={200} h={200} />
        </div>

        <div className={`${currHobby === GAMES ? 'block h-96' : 'hidden'}`}>
          <ListItem hobby={GAMES} w={200} h={200}/>
        </div>


        <div className={`${currHobby === ANIME ? 'block h-[480px]' : 'hidden'}`}>
          <ListItem hobby={ANIME} w={200} h={300} />
        </div>

      </div>
    </div>
  )
}

export default HobbieList