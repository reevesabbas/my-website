import React, { useState } from 'react'

interface Props {
  children?: React.ReactNode;
  onClick?: (param?: any) => void;
  addStyle?: string;
}

const NavButton: React.FC<Props> = ({children, onClick, addStyle, ...rest}) => {
  //dark:focus:bg-darkOrange focus:bg-darkBlue focus:border-0 dark:focus:text-white focus:text-white focus:scale-110
  return (
    <button 
      onClick={onClick}
      className={`${addStyle} dark:border-lighterGray border-lightGray
      px-4 py-[3px] rounded-md font-fjalla text-lg duration-200 ease-in-out`}
      >
      {children}
    </button>
  )
}

export default NavButton