import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';
import { to, animated, useSprings } from 'react-spring';

import { Hobby } from './assets';

interface Props {
  hobby: Array<Hobby>;
  w: number;
  h: number;
}

// Default animations for each hobby item.
const getAnim = (i: number, current: number, length: number) => {
  const positionIndex = ((i - current + length) % length + length) % length;

  const isAround = Math.abs(positionIndex) <= 1 || Math.abs(positionIndex - length) <= 1;
  const isActive = positionIndex === 0;

  return {
    scale: isActive ? 1.1 : isAround ? 0.75 : 0,
    blur: isActive ? 0 : 3,
    opacity: isAround ? 1 : 0,
    left: (positionIndex <= length / 2 ? positionIndex : positionIndex - length) * 225,
  };
};

// Helper function to inject string into CSS styling.
const trans = (l: number, s: number) => `translateX(${l}px) scale(${s})`;

const HobbyItem: React.FC<Props> = ({ hobby, w, h, ...rest }) => {
  const [currIndex, setCurrIndex] = useState(2);
  const { name, author, img, link } = useMemo(() => {
    if (!hobby.length) {
      return { name: '', author: '', img: '', link: '' };
    }
    const validIndex = ((currIndex % hobby.length) + hobby.length) % hobby.length;
    return hobby[validIndex];
  }, [currIndex, hobby]); const length = useMemo(() => hobby.length, [hobby]);

  const [props, api] = useSprings(
    length,
    (i) => ({ ...getAnim(i, currIndex, length) }),
    [currIndex]
  );

  const handleClick = (update: number) => {
    setCurrIndex((curr) => curr + update);
  };

  return (
    <div className={`flex flex-col text-center justify-center items-center w-full`}>
      <div
        className={`overflow-hidden w-full relative flex flex-row justify-center items-center mt-10`}
        style={{ height: h * 1.2 }}
      >
        {props.map(({ scale, blur, left, opacity }, i) => (
          <animated.div
            style={{
              position: 'absolute',
              opacity,
              transform: to([left, scale], trans),
              // filter: blur.to((v: Number) => `blur(${v}px)`),
            }}
            key={`hobby-carousel-${hobby[i].name}-${i}`}
          >
            <a href={hobby[i].link} target="_blank" rel="noopener noreferrer">
              <Image
                alt={`${hobby[i].name} from hobby carousel`}
                src={hobby[i].img}
                width={w}
                height={h}
                layout="fixed"
                className="rounded-sm"
              />
            </a>
          </animated.div>
        ))}
      </div>
      <div className="w-48 h-20">
        <h4 className="font-yeseva text-lg mt-7 text-white"> {`'${name}'`} </h4>
        <h4 className="font-yeseva text-sm pt-2 text-lightGray"> {author} </h4>
      </div>

      <div className="flex justify-between md:w-1/3 w-3/4">
        <button
          onClick={() => handleClick(-1)}
          className="drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1"
        >
          <IoMdArrowDropleftCircle size={32} fill={'#006FDC'} />
        </button>
        <button
          onClick={() => handleClick(1)}
          className="drop-shadow-lg rounded-full hover:scale-125 duration-200 ease-in-out active:translate-y-1"
        >
          <IoMdArrowDroprightCircle size={32} fill={'#006FDC'} />
        </button>
      </div>
    </div>
  );
};

export default HobbyItem;

