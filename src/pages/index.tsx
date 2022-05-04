import React from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'

import { GrInstagram, GrTwitter, GrGithub } from 'react-icons/gr'
import { FcBriefcase } from 'react-icons/fc'
import { FaTools } from 'react-icons/fa'
import Navbar from '../components/Navbar/Navbar';
import IconButton from '../components/Buttons/IconButton';
import GenContainer from '../components/Container/Gen';

const Home: NextPage = () => {
  return (
    <div className='w-full h-screen bg-lightestPurple dark:bg-darkestPurple'>
      <Navbar> </Navbar>

      {/** Container */}
      <div className='md:max-w-[975px] h-[500px] flex mx-auto p-10 md:mb-10'>
        <div className='flex flex-col justify-end space-y-3 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl font-yeseva dark:text-white'> Reeves Abbas</h1>
          <h2 className='font-yeseva text-blue dark:text-orange text-2xl'> A Full Stack Developer </h2>
          <p className='font-amiri text-center md:text-left text-lg font-semibold dark:font-medium'> Hey, welcome to my personal website; developed with 
          NextJS, Typescript and Tailwind CSS. I'm a 20 year old student majoring in Software Engineering at the University of Michigan in the US. However,
          I'm always seeking for more opportunities to nurture my talents and use them for creating software I am most
          proud of. Thank you for visiting, I hope you like what you see! :-)

          </p>
          <div className='flex flex-row md:justify-start justify-center space-x-6'>
            <a
            href='https://twitter.com/reevfs'
            target='_blank'
            rel='noopener noreferrer'>
              <IconButton icon={GrTwitter} >
                <GrTwitter size={38}/> 
              </IconButton>
            </a>
            <a
            href='https://github.com/reevesabbas'
            target='_blank'>
              <IconButton icon={GrGithub}>
                <GrGithub size={38} />
              </IconButton>
            </a>
            <a
            href='https://www.instagram.com/reeves.19/'
            target='_blank'>
              <IconButton icon={GrInstagram}>
                <GrInstagram size={38} />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
      

      {/* first container */}

      <div className='lg:max-w-[975px] flex mx-auto lg:p-0 p-10'>
        <div className='w-[975px] h-fit flex mx-auto dark:bg-lightestBlue bg-darkPurple dark:bg-opacity-5 bg-opacity-10 rounded-lg p-10'>
          <div className='w-full flex flex-col justify-center space-y-6 md:text-left text-center'>
            <header className='flex flex-row justify-center md:justify-start'>
              <h1 className='text-3xl md:text-4xl font-yeseva dark:text-white'> Skills </h1>
              <FaTools size={35} className='w-fit h-fit pl-4 fill-orange' />
            </header>
            <p className='font-amiri text-lg font-semibold dark:font-medium'> Hi, words typing because I want to see how this looks for now. I will fill this in 
            with words later. I just want to see how this looks. Okay so I'm just going to put more words here 
            until I am satisfied. Done. Hi, words typing because I want to see how this looks for now. I will fill this in 
            with words later. I just want to see how this looks. Okay so I'm just going to put more words here 
            until I am satisfied. Done. </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home