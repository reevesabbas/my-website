import React from 'react'
import { IconBaseProps  } from 'react-icons/lib';

interface Props {
  title: string;
  icon?: IconBaseProps;
  children: React.ReactNode,
  body?: string;
  id?: string;
}

const GenContainer: React.FC<Props> = ({children, title, icon, id, ...rest}) => {
  return (
      <section id={id} className='md:max-w-[1250px] w-full flex mx-auto'>
        <div className='md:w-[1000px] sm:w-full h-full flex mx-auto dark:bg-lightestBlue bg-[#001844] dark:bg-opacity-[0.065] bg-opacity-10 rounded-lg sm:p-10 px-3 py-7'>
          <div className='w-full flex flex-col justify-center space-y-5 md:text-left text-center'>
            <header className='flex flex-row justify-center md:justify-start'>
              <h1 className='text-3xl md:text-4xl font-yeseva dark:text-white'> {title} </h1>
              <div className='w-fit h-fit pl-4 dark:text-orange text-blue'> <> {icon} </> </div>
            </header>
            {children}
          </div>
        </div>
      </section>  
  )
}

export default GenContainer