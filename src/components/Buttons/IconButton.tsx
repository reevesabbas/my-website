import React, { Children } from 'react'
import { IconType } from 'react-icons/lib';

interface Props {
  Icon: IconType;
  children?: React.ReactNode;
  onClick?: (param?: any) => void;
  size: number;
}

const IconButton: React.FC<Props> = ({Icon, children, onClick, size, ...rest}) => {
  return (
    <button 
      className='hover:scale-110 hover:text-blue active:translate-y-0.5 active:text-darkerBlue ease-in-out
       duration-150 drop-shadow-lg dark:hover:text-orange dark:active:text-darkerOrange'
       onClick={onClick}
       {...rest}
       >
         <Icon size={size}/>
    </button>
  )
}

export default IconButton