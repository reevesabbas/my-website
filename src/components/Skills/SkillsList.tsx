import React from 'react';
import SKILLS from './assets';

interface Props {
  size: number;
  onClick?: (param?: any) => void;
}

const SkillsList: React.FC<Props> = ({ size, onClick, ...rest }) => {
  return (
    <ul className="flex flex-wrap text-center justify-center">
      {SKILLS.map((el) => (
        <a href={el.link} target="_blank" rel="noopener noreferrer" key={`${el.name}`} className="flex justify-center">
          <li
            className={`flex flex-col p-2 py-7 mt-2 items-center justify-center w-[120px] h-55 rounded-md hover:bg-[#b4b9ce]/5 scale-90 hover:scale-105 ease-in-out duration-300 active:translate-y-2`}
          >
            <>
              {React.createElement(el.icon, { size: size, color: el.fill })}
              <p className="mt-2 w-28 pt-2 text-base text-white"> {el.name} </p>
            </>
          </li>
        </a>
      ))}
    </ul>
  );
};

export default SkillsList;
