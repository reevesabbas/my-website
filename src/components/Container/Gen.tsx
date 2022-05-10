import React from 'react'
import { GrGithub, GrInstagram, GrTwitter } from 'react-icons/gr'
import { IconBaseProps, IconType } from 'react-icons/lib';
import IconButton from '../Buttons/IconButton'

interface Props {
  title: string;
  icon?: IconBaseProps;
  children: React.ReactNode
}

const GenContainer: React.FC<Props> = ({children, title, icon, ...rest}) => {
  return (
      <section className='md:max-w-[1250px] flex mx-auto'>
        <div className='md:w-[1000px] sm:w-full h-fit flex mx-auto dark:bg-lightestBlue bg-darkPurple dark:bg-opacity-[0.065] bg-opacity-10 rounded-lg p-10'>
          <div className='w-full flex flex-col justify-center space-y-6 md:text-left text-center'>
            <header className='flex flex-row justify-center md:justify-start'>
              <h1 className='text-3xl md:text-4xl font-yeseva dark:text-white'> {title} </h1>
              <div className='w-fit h-fit pl-4 dark:text-orange text-blue'> <> {icon} </> </div>
            </header>
            <p className='font-amiri text-xl font-semibold dark:font-medium leading-9'> {children} </p>
          </div>
        </div>
      </section>  
  )
}

export default GenContainer