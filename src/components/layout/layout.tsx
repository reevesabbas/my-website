import React from 'react'

function Layout({children}:{children:any}) {
  return (
    <div className='bg-darkestPurple'>
      {children}
    </div>
  )
}

export default Layout