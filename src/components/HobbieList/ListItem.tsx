import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';
import { useSpring, animated, useSprings } from 'react-spring'

import { Hobby } from '../../assets/Hobbies'

interface Props {
  hobby: Array<Hobby>
  w: number;
  h: number;
}

const ListItem: React.FC<Props> = ({ hobby, w, h, ...rest}) => {
  
  const {theme, setTheme} = useTheme();
  const [currIndex, setCurrIndex] = useState(0);
  const {name, author, img, link} = useMemo(() => hobby[currIndex], [currIndex])
  const length = useMemo(() => hobby.length, [hobby])

  const [styles, api] = useSprings(4, i => ({
    scale: i <= 1 ? 0.75 : 1.5,
  })
  );

  const nextIndex = (currIndex + 1) % length;
  const prevIndex = (currIndex + length - 1) % length;

  const handleClick = ((r: boolean) => {
    if (r) {
      setCurrIndex((currIndex) => (currIndex + 1) % length);
    } else {
      setCurrIndex((currIndex) => (currIndex + length - 1) % length);
    }
  })

  return (
    <div>

      <div className='flex flex-row w-fit h-fit my-10'>

          <ul className='flex flex-row md:space-x-6 items-center drop-shadow-xl h-fit blur-[2px] pt-9'>
            <li className={`sm:block hidden`}> <Image src={hobby[prevIndex].img} width={w / 1.5} height={h / 1.5} layout='fixed' /> </li>
          </ul>

        <div className='flex flex-col max-w-[200px] space-y-5 items-center text-center h-fit sm:mx-7 z-10'>
          <a
            href={link}
            target='_blank'
            >
            <animated.div
            style={styles[0]}>
              <Image 
                src={img}
                width={w} 
                height={h} 
                layout='fixed'
                className='rounded-sm'
                />
              </animated.div>
            <h4 className='font-yeseva text-lg pt-7'> {`'${name}'`} </h4>
            <h4 className='font-yeseva text-sm pt-2 text-lightGray'> {author} </h4>
          </a>
        </div>

          <ul
            className='flex flex-row md:space-x-6 items-center drop-shadow-xl h-fit blur-[2px] pt-9'
          >
            <animated.li 
            style={{}}
            className='sm:block hidden'> <Image src={hobby[nextIndex].img} width={w / 1.5} height={h / 1.5} layout='fixed' /> </animated.li>
          </ul>
        
      </div>

        <div className='absolute inset-x-0 bottom-[50px] flex justify-between mx-auto md:w-80 sm:w-1/2 w-3/4 mb-5'>
          <button onClick={() => handleClick(false)} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoMdArrowDropleftCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`} /> </button>
          <button onClick={() => handleClick(true)} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoMdArrowDroprightCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`}/> </button>
        </div>

    </div>
  )
}

export default ListItem