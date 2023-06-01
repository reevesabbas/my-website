import React from 'react'

interface Props {
  children: React.ReactNode;
  onClick?: (param?: any) => void;
}

const TextButton: React.FC<Props> = ({children, onClick, ...rest}) => {
  return (
    <button
      className='font-fjalla text-4xl text-darkestPurple dark:text-white hover:text-blue hover:dark:text-blue hover:scale-105 
      active:translate-y-0.5 active:text-darkBlue ease-in-out duration-150 drop-shadow-lg text-shadow dark:text-shadow-dark hover:text-shadow-none active:text-shadow-none
      dark:hover:text-shadow-none dark:active:text-shadow-none'
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default TextButton