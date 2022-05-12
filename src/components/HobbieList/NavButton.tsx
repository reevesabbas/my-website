import React from 'react'

interface Props {
  children?: React.ReactNode
}

const NavButton: React.FC<Props> = ({children, ...rest}) => {
  return (
    <button className='dark:focus:bg-darkOrange focus:bg-darkBlue focus:border-0 dark:focus:text-white focus:text-white focus:scale-110 scale-90 border-[1.5px] dark:border-lighterGray dark:text-lighterGray border-lightGray text-lightGray px-4 py-[3px] rounded-md font-fjalla text-lg duration-300 ease-in-out'>
      {children}
    </button>
  )
}

export default NavButton