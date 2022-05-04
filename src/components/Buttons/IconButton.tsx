import React, { Children } from 'react'
import { IconType } from 'react-icons/lib';

interface Props {
  icon: IconType;
  children: React.ReactNode;
  onClick?: (param?: any) => void;
}

const IconButton: React.FC<Props> = ({icon, children, onClick, ...rest}) => {
  return (
    <button 
      className='hover:scale-110 hover:text-blue active:translate-y-0.5 active:text-darkerBlue ease-in-out
       duration-150 drop-shadow-lg dark:hover:text-orange dark:active:text-darkerOrange'
       onClick={onClick}
       {...rest}
       >
        {children}
    </button>
  )
}

export default IconButton