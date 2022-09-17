import React from 'react'
import SKILLS from './assets';

interface Props {
  size: number,
  onClick?: (param?: any) => void;
}

const SkillsList: React.FC<Props> = ({ size, onClick, ...rest}) => {
    
    return (
      <ul className='md:mx-10 flex flex-wrap text-center justify-center sm:space-x-4 p-4'>
        {SKILLS.map((el) => (
          <a href={el.link} target='_blank' rel='noopener noreferrer' key={`${el.name}`} className='flex justify-center'>
            <li className={`flex flex-col sm:p-2 p-2 mt-2 flex items-center justify-center w-[130px] h-55 rounded-md hover:bg-[#000046]/5 dark:hover:bg-[#b4b9ce]/5 scale-90 hover:scale-105 ease-in-out duration-300 active:translate-y-2`}>
              <>
                {React.createElement(el.icon, {size: size, color: el.fill})}
                <p className='mt-2 w-28 pt-2 text-lg'> {el.name} </p>
              </>
            </li>
          </a>
        ))}
    </ul>
  )
}

export default SkillsList