import React from 'react'
import { GrGithub, GrInstagram, GrTwitter } from 'react-icons/gr'
import { IconType } from 'react-icons/lib';
import IconButton from '../Buttons/IconButton'

interface Props {
  title: string;
  icon?: IconType;
  body: string;
  children: React.ReactNode
}

const GenContainer: React.FC<Props> = ({children, title, icon, body, ...rest}) => {
  return (
    <div className='w-[975px] h-fit flex mx-auto dark:bg-lightestBlue bg-black dark:bg-opacity-5 bg-opacity-5 rounded-lg md:p-10 p-7'>
      <div className='w-full flex flex-col justify-center space-y-3 text-left'>
        <h1 className='text-4xl font-yeseva dark:text-white'> {title} </h1>
        <p className='font-amiri text-lg font-semibold dark:font-medium'> {body} </p>
      </div>
    </div>
  )
}

export default GenContainer