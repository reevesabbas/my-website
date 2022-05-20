import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';
import { interpolate, useSpring, animated, useSprings, useTransition, to } from 'react-spring'

import { Hobby } from '../../assets/Hobbies'

interface Props {
  hobby: Array<Hobby>
  w: number;
  h: number;
}

//Default animations for each hobby item.
const getAnim = (i: number, current: number) => {
  const isAround = i >= current - 1 && i <= current + 1;
  const isActive = i === current;

  return {
    scale: (isActive ? 1.1 : isAround ? 0.75 : 0),
    blur: (isActive ? 0 : 3),
    opacity: isAround ? 1 : 0,
    left: (current - i) * 250 * -1,
  }
}

//helper function to inject string into css styling.
const trans = (l:number, s:number) => `translateX(${l}px) scale(${s})`;

const ListItem: React.FC<Props> = ({ hobby, w, h, ...rest}) => {
  
  const {theme, setTheme} = useTheme();
  const [currIndex, setCurrIndex] = useState(0);
  const { name, author, img, link} = useMemo(() => hobby[currIndex], [currIndex, hobby])
  const length = useMemo(() => hobby.length, [hobby])

  const [props, api] = useSprings(
    length,
    i => ({ ...getAnim(i, currIndex) }), [currIndex]
  )

  const handleClick = (update: number) => {
    setCurrIndex((curr) => (curr + (update ? length : 0) + update) % length);
  };

  return (
    <div className='w-full'>
      <div className={`flex flex-col my-10 text-center justify-center items-center w-full`}>
        <div className={`overflow-hidden w-full relative flex flex-row justify-center items-center mt-5`}
          style={{height: h * 1.2}}>
          {props.map(({scale, blur, left, opacity}, i) => (
            <animated.div
              style={{
                position: 'absolute',
                opacity,
                transform: interpolate([left, scale], trans),
                filter: blur.to((v: Number) => `blur(${v}px)`),
              }}
              key={`hobby-carousel-${hobby[i].name}-${i}`}
            >
              <Image
                src={hobby[i].img}
                width={w} 
                height={h} 
                layout='fixed'
                className='rounded-sm'
              />
            </animated.div>
          ))}
        </div>
        <h4 className='font-yeseva text-lg pt-7 w-48 '> {`'${name}'`} </h4>
        <h4 className='font-yeseva text-sm pt-2 text-lightGray w-48'> {author} </h4>
      </div>

      <div className='absolute inset-x-0 bottom-[50px] flex justify-between mx-auto md:w-80 sm:w-1/2 w-3/4 mb-5'>
        <button onClick={() => handleClick(-1)} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoMdArrowDropleftCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`} /> </button>
        <button onClick={() => handleClick(1)} className='drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1'> <IoMdArrowDroprightCircle size={32} fill={`${ theme === 'dark' ? '#FE5E19' : '#006FDC'}`}/> </button>
      </div>
    </div>
  )
}

export default ListItem