import React, { useMemo, useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'
import IconButton from '../Buttons/IconButton';

const PROJECTS = [
  { title: 'Ergo',
    icons: {icon: GrGithub,
    link: ''},
    body: 'Hello'
  },
  {
    title: 'Personal Website',
    icons: {icon: GrGithub,
    link: ''},
    body: 'Sugondese',
  }
]

let count = 0;

const Carousel = () => {

  const [index, setIndex] = useState(0);
  const { title, icons, body } = useMemo(() => PROJECTS[index], [index])

  const handleNextClick = () => { count = (count+1) % PROJECTS.length
  setIndex(count);
  };
  const handlePrevClick = () => { 
    const length = PROJECTS.length;
    count = (index + length - 1) % length;
    setIndex(count);
  }

  return (
    <div className='w-full h-fit select-none relative bg-[#2d2941] rounded-lg'>

      <div className='absolute w-full top-[110px] flex justify-between items-center'>
        <button onClick={handlePrevClick}> <BsFillArrowLeftCircleFill size={35}/> </button>
        <button onClick={handleNextClick}> <BsFillArrowRightCircleFill size={35}/> </button>
      </div>

      <div className='h-[250px] flex flex-col space-y-4 items-end py-5 px-20'>
        <h2> {title} </h2>
        <IconButton Icon={icons.icon}> </IconButton>
        <p> {body} </p>
      </div>
      
    </div>
  )
}

export default Carousel