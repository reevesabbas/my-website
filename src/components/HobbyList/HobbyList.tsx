import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import ListItem from './HobbyCarousel';
import NavButton from './NavButton';
import IconButton from '../Buttons/IconButton';
import { HOBBIES, Hobby } from './assets';
import { useSpring, animated } from 'react-spring';

const HobbieList = () => {
  const [showHobbies, setShowHobbies] = useState(true);
  const [currHobby, setCurrHobby] = useState(HOBBIES.ALBUMS);
  const imageHeight = currHobby === HOBBIES.ANIME ? 300 : 200;
  const animHeight = currHobby === HOBBIES.ANIME ? 550 : 450;

  const panelAnim = useSpring({
    height: showHobbies ? animHeight : 0,
    opacity: showHobbies ? 1 : 0
  });

  const handleNavClick = (Hobby: Hobby) => {
    //setCurrHobby()
  };

  return (
    <div className="divide-y divide-lightGray dark:bg-gray bg-lightestPurple rounded-md drop-shadow-xl">
      <nav className="h-fit flex justify-end py-4 px-6 space-x-4">
        <div className="flex justify-start w-full h-8">
          <IconButton
            Icon={IoIosArrowDown}
            size={35}
            onClick={() => {
              setShowHobbies(!showHobbies);
            }}
            addStyle={`${!showHobbies ? 'rotate-0' : '-rotate-180'}`}
          />
        </div>
        <NavButton onClick={() => setCurrHobby(HOBBIES.ALBUMS)} active={currHobby === HOBBIES.ALBUMS ? true : false}>
          {' '}
          MUSIC{' '}
        </NavButton>
        <NavButton onClick={() => setCurrHobby(HOBBIES.GAMES)} active={currHobby === HOBBIES.GAMES ? true : false}>
          {' '}
          GAMES{' '}
        </NavButton>
        <NavButton onClick={() => setCurrHobby(HOBBIES.ANIME)} active={currHobby === HOBBIES.ANIME ? true : false}>
          {' '}
          ANIME{' '}
        </NavButton>
      </nav>

      <animated.div className={`justify-center mx-7 overflow-hidden`} style={panelAnim}>
        <ListItem hobby={currHobby} w={200} h={imageHeight} />
      </animated.div>
    </div>
  );
};

export default HobbieList;
