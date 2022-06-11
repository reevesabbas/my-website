import { useTheme } from 'next-themes';
import React, { useMemo, useState } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { VscGithub } from 'react-icons/vsc'
import { animated, useSpring } from 'react-spring';

import IconButton from '../Buttons/IconButton';

const PROJECTS = [
  { name: 'Ergo',
    title: 'Task/Calendar App',
    iconBtn: {icon: VscGithub,
      link: 'https://github.com/Ergo-Tasks/ergo-api'},
    body: `App allows you to create a user, and login. Password is encrypted and JWT is used to authenticate. User's can create, delete, update, and view tasks.
    Tasks can have up to numerous tags attached for filtering/organization (Tags have CRUD operations as well).`
  },
  {
    name: 'Personal Website',
    title: 'React TS Website',
    iconBtn: {icon: VscGithub,
      link: 'https://github.com/reevesabbas/my-website'},
    body: `Making my own website made the most sense to practice React, and learn Tailwind. Both are great tools that further guide my focus to front-end development more.
    It was a very thought provoking and immersive challenge that I'm looking forward to face again.`,
  }
]

const Carousel = () => {

  const {theme, setTheme} = useTheme();
  const [currIndex, setCurrIndex] = useState(0);
  const { name, title, iconBtn, body } = useMemo(() => PROJECTS[currIndex], [currIndex])
  const [styles, api] = useSpring(() => {})

  const handleClick = ((r: boolean) => {
    
    const length = PROJECTS.length;
    if (r) {
      setCurrIndex((currIndex) => (currIndex + 1) % length);
    } else {
      setCurrIndex((currIndex) => (currIndex + length - 1) % length);
    }
    api({
      from: { opacity: 0},
      to: { opacity: 1 }
    })
  })

  return (
    <div className='mt-6 w-full h-fit select-none relative dark:bg-[#1d173b] bg-lightestPurple rounded-xl drop-shadow-lg'>

      <div className='absolute align-top w-full flex justify-between top-1/2 items-center opacity-100'>
        <button onClick={() => handleClick(false)} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoIosArrowDropleftCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`} /> </button>
        <button onClick={() => handleClick(true)} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoIosArrowDroprightCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`}/> </button>
      </div>

      <animated.div
        style={styles}
       className='h-fit flex flex-col space-y-4 items-end sm:mx-20 mx-10 py-7 md:text-right text-center'>
        <h2 className='w-full text-2xl md:text-3xl'> {name} </h2>
        <div className='flex flex-row md:justify-end justify-center space-x-4 w-full'>
        <a
        href={iconBtn.link}
        target='_blank'
        rel='noopener noreferrer'
        > <IconButton Icon={iconBtn.icon} size={30}/> </a>
          <h3> {title} </h3>
        </div>
        <p> {body} </p>
      </animated.div>

      <div className='flex absolute justify-center mx-auto flex-row space-x-1.5 w-full h-4 pt-3'>
        {PROJECTS.map((el, index) => (
          <div className={`w-2 h-2 rounded-full dark:bg-orange bg-blue ${currIndex === index ? 'opacity-100' : 'opacity-30'}`}
          key={`projects-carousel-${PROJECTS[index].title}-${index}`}
          />
        ))}
      </div>
    </div>
    
  )
}

export default Carousel