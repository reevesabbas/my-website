import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import React, { useMemo, useRef, useState } from 'react'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';
import { useSpring, animated } from 'react-spring'

import { Hobby } from '../../assets/Hobbies'

interface Props {
  hobby: Array<Hobby>
  w: number;
  h: number;
  leftTransition?: string;
  rightTransition?: string;
}

const ListItem: React.FC<Props> = ({ hobby, w, h, leftTransition, rightTransition, ...rest}) => {
  
  const {theme, setTheme} = useTheme();
  const [currIndex, setCurrIndex] = useState(0);
  const {name, author, img, link} = useMemo(() => hobby[currIndex], [currIndex])

  const [styles, api] = useSpring(() => {});

  const nextIndex = (currIndex + 1) % hobby.length;
  const nextTwoIndex = (currIndex + 2) % hobby.length;
  const prevIndex = (currIndex + hobby.length - 1) % hobby.length;
  const prevTwoIndex = (currIndex + hobby.length - 2) % hobby.length;

  const handleNextClick = () => {
    //setCurrIndex((currIndex) => (currIndex + 1) % hobby.length);

    api.start({
      from: {
        blur: 0,
        transform: 'translateX(0)'
      },
      to: {
        blur: 2,
        transform: 'translateX(1/2)'
      }
    })
  }
  const handlePrevClick = () => { 
    const length = hobby.length;
    //setCurrIndex((currIndex) => (currIndex + length - 1) % length);

    api.start({
      from: {
        blur: 0,
        transform: 'translateX(0)'
      },
      to: {
        blur: 2,
        transform: 'translateX(-1/2)'
      }
    })
  }

  return (
    <div>

      <div className='flex flex-row w-fit h-fit my-10'>

        <div className='p-10 items-center blur-[2px]'>
          <ul className='flex flex-row space-x-6 items-center drop-shadow-xl'>
            <li className='md:block hidden'> <Image src={hobby[prevTwoIndex].img} width={w / 2 } height={h / 2} layout='fixed' /> </li>
            <li className={`sm:block hidden ${leftTransition}`}> <Image src={hobby[prevIndex].img} width={w / 1.5} height={h / 1.5} layout='fixed' /> </li>
          </ul>
        </div>

        <div className='flex flex-col space-y-5 items-center text-center h-fit'>
          <animated.a
            style={styles}
            href={link}
            target='_blank'
            className='drop-shadow-xl '
            >
            <Image 
              src={img}
              width={w} 
              height={h} 
              layout='fixed'
              />
            <h4 className='font-yeseva text-lg pt-7'> {`'${name}'`} </h4>
            <h4 className='font-yeseva text-sm pt-2 text-lightGray'> {author} </h4>
          </animated.a>
        </div>

        <div className='h-fit p-10 items-center blur-[2px] space-x-5'>
          <ul className='flex flex-row space-x-6 items-center drop-shadow-xl'>
            <li className='sm:block hidden'> <Image src={hobby[nextIndex].img} width={w / 1.5} height={h / 1.5} layout='fixed' /> </li>
            <li className='md:block hidden'> <Image src={hobby[nextTwoIndex].img} width={w / 2 } height={h / 2} layout='fixed' /> </li>
          </ul>
        </div>
        
      </div>

        <div className='absolute inset-x-0 bottom-[50px] flex justify-between mx-auto md:w-1/2 w-3/4 mb-5'>
          <button onClick={handlePrevClick} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoMdArrowDropleftCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`} /> </button>
          <button onClick={handleNextClick} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoMdArrowDroprightCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`}/> </button>
        </div>

    </div>
  )
}

export default ListItem