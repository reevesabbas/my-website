import React, { createElement, useState } from 'react'
import { SiExpress, SiHtml5, SiJest, SiReact, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useSpring, animated } from 'react-spring';
import Skills from './assets';

interface Props {
  size: number,
  onClick?: (param?: any) => void;
}

const SkillsList: React.FC<Props> = ({ size, onClick, ...rest}) => {

  const [isHover, setisHover] = useState(false);

  const props = useSpring({
    scale: isHover ? 1.2 : 1
  })

  return (
    <ul className='md:mx-10 flex flex-wrap text-center justify-center space-x-8 p-4'>
      {Skills.map((skill) => {
        const Icon = skill.icon
        return (
            <a href={skill.link} target='_blank' rel='noopener noreferrer' key={`${skill.name}`} className='flex justify-center'>
              <animated.li className={`flex flex-col p-3 my-3 flex items-center justify-center w-[130px] h-55 rounded-md hover:bg-[#70758b]/20`}
              style={props}
              onMouseEnter={() => setisHover(true)} 
              onMouseLeave={() => setisHover(false)}>
                  <Icon size={size} fill={skill.fill}/>
                <p className='mt-3 w-32 text-lg'> {skill.name} </p>
              </animated.li>
            </a>
        )
      })}
    </ul>
  )
}

export default SkillsList