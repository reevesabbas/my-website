import { useTheme } from 'next-themes';
import React, { useMemo, useState } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import {VscGithub} from 'react-icons/vsc'
import IconButton from '../Buttons/IconButton';

const PROJECTS = [
  { name: 'Ergo',
    title: 'Task/Calendar App',
    icons: {icon: VscGithub,
    link: ''},
    body: `App allows you to create a user, and login. Password is encrypted and JWT is used to authenticate. User's can create, delete, update, and view tasks.
    Tasks can have up to numerous tags attached for filtering/organization (Tags have CRUD operations as well).`
  },
  {
    name: 'Personal Website',
    title: 'React TS Website',
    icons: {icon: VscGithub,
    link: ''},
    body: `My first experience creating a website was great. Tailwind is the best styling framework I've worked with. And even with my limited experience- I believe it will retain that title as I
    continue to grow as a developer.`,
  }
]

let count = 0;

const Carousel = () => {

  const {theme, setTheme} = useTheme();
  const [currIndex, setCurrIndex] = useState(0);
  const { name, title, icons, body } = useMemo(() => PROJECTS[currIndex], [currIndex])

  const handleNextClick = () => { count = (count+1) % PROJECTS.length
    setCurrIndex(count);
  }
  const handlePrevClick = () => { 
    const length = PROJECTS.length;
    count = (currIndex + length - 1) % length;
    setCurrIndex(count);
  }

  return (
    <div className='mt-6 w-full h-fit select-none relative dark:bg-[#1d173b] bg-lightestPurple rounded-xl drop-shadow-lg'>

      <div className='absolute w-full top-1/2 flex justify-between items-center opacity-100'>
        <button onClick={handlePrevClick} className='drop-shadow-lg rounded-full dark:hover:bg-white hover:bg-darkestPurple'> <IoIosArrowDropleftCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`} /> </button>
        <button onClick={handleNextClick} className='drop-shadow-lg rounded-full dark:hover:bg-white hover:bg-darkestPurple'> <IoIosArrowDroprightCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`}/> </button>
      </div>

      <div className='h-fit flex flex-col space-y-4 items-end md:mx-20 mx-16 py-7 md:text-right text-center'>
        <h2 className='w-full text-2xl md:text-3xl'> {name} </h2>
        <div className='flex flex-row md:justify-end justify-center space-x-4 w-full'>
          <IconButton Icon={icons.icon} size={30}/>
          <h3> {title} </h3>
        </div>
        <p> {body} </p>
      </div>

      <div className='flex absolute justify-center mx-auto flex-row space-x-1.5 w-full h-4 pt-3'>
        {PROJECTS.map((el, index) => (
          <div className={`w-2 h-2 rounded-full dark:bg-orange bg-blue ${currIndex === index ? 'opacity-100' : 'opacity-30'}`}/>
        ))}
      </div>
    </div>
    
  )
}

export default Carousel