import React from 'react'

interface Props {
  children?: React.ReactNode
}

const NavButton: React.FC<Props> = ({children, ...rest}) => {
  return (
    <button className='bg-[#4758b9] px-3 rounded-lg font-fjalla tracking-wide'>
      {children}
    </button>
  )
}

export default NavButton