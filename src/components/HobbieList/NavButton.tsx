import React  from 'react'
interface Props {
  children?: React.ReactNode;
  onClick?: (param?: any) => void;
  active: boolean;
}

const NavButton: React.FC<Props> = ({children, onClick, active, ...rest}) => {
  return (
    <button 
      onClick={onClick}
      className={`${active ? 'dark:bg-darkOrange bg-darkBlue border-0 text-white scale-110 dark:text-white' : 'dark:text-lighterGray hover:scale-[5px] scale-90 border-[1.5px] text-lightGray'}
       dark:border-lighterGray border-lightGray px-4 py-[3px] rounded-md font-fjalla text-lg duration-200 ease-in-out`}
      >
      {children}
    </button>
  )
}

export default NavButton