import React from 'react';
import type { NextPage } from 'next'
import { FaCopy } from 'react-icons/fa'
import { FcSupport, FcBriefcase, FcFeedback } from 'react-icons/fc'
import { SiTypescript, SiReact, SiHtml5, SiTailwindcss, SiJest, SiExpress } from 'react-icons/si'

import Navbar from '../components/Navbar/Navbar';
import GenContainer from '../components/Container/Gen';
import SocialButtons from '../components/Buttons/SocialButtons';

const Home: NextPage = () => {
  return (
    <div className='content-container'>

      <Navbar />

      {/* Intro Container */}

      <section className='flex px-10 mt-[200px]'>
        <div className='flex flex-col justify-end space-y-5 text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl font-yeseva dark:text-white'> Reeves Abbas</h1>
          <h2 className='font-yeseva text-blue dark:text-orange text-2xl'> A Full Stack Developer </h2>
          <p className='font-amiri text-center md:text-left text-xl font-semibold dark:font-medium leading-9'> Hey, welcome to my personal website; developed with 
          NextJS, Typescript and Tailwind CSS. I'm a 20 year old student majoring in Software Engineering at the University of Michigan in the US.
          I'm always seeking more opportunities to nurture my talents and use them for creating software I am
          proud of. Thank you for visiting, I hope you like what you see!
          </p>
          <SocialButtons />
        </div>
      </section>
      

      {/* Skills Container */}

      <GenContainer title={'Skills'} icon={<FcSupport size={40}/>}>
        These are just some of the dev tools I feel most confident with to use in my projects.
        <div className='flex md:flex-row flex-col items-center text-center md:space-x-[85px] pt-8'>
          <ul className='flex flex-row md:space-x-[85px] sm:space-x-[150px] space-x-[60px]'>
            <li>
              <SiTypescript size={80} fill='#007acc' />
              <p className='pt-4'> Typescript </p>
            </li>
            <li>
              <SiHtml5 size={80} fill='#e34c26' />
              <p className='pt-4'> HTML </p>
            </li>
            <li>
              <SiReact size={80} fill='#61dbfb' />
              <p className='pt-4'> React </p>
            </li>
          </ul>
          <ul className='flex flex-row md:space-x-[85px] sm:space-x-[150px] space-x-[60px] md:pt-0 pt-8'>
            <li>
              <SiJest size={80} fill='#a0444c'/>
              <p className='pt-4'> Jest </p>
            </li>
            <li>
              <SiTailwindcss size={80} fill='#34b4ec' />
              <p className='pt-4'> Tailwind </p>
            </li>
            <li>
              <SiExpress size={80} />
              <p className='pt-4'> Express </p>
            </li>
          </ul>
        </div>
      </GenContainer>

      {/* Projects Container */}

      <GenContainer title='Projects' icon={<FcBriefcase size={40}/>}>
        Hi, words typing because I want to see how this looks for now. I will fill this in 
        with words later. I just want to see how this looks. Okay so I'm just going to put more words here 
        until I am satisfied. Done. Hi, words typing because I want to see how this looks for now. I will fill this in 
      </GenContainer>

      <GenContainer title='Contact' icon={<FcFeedback size={40}/>}>
        Feel free to leave me a message here or email me at: reeves.abbas@gmail.com
        <div className='flex flex-col pt-7 space-y-7'>
          <input className='dark:bg-[#36313C] bg-lightestPurple p-2 text-lg rounded-sm' placeholder='Email'/>
          <input className='dark:bg-[#36313C] bg-lightestPurple p-2 text-lg rounded-sm' placeholder='Subject'/>
          <textarea className='dark:bg-[#36313C] bg-lightestPurple p-2 text-lg rounded-sm' placeholder='Message'/>
          <button className='mx-auto font-fjalla text-3xl text-darkestPurple dark:text-white hover:scale-105 active:translate-y-0.5 ease-in-out duration-150
            hover:bg-blue hover:border-blue dark:hover:bg-darkOrange dark:hover:border-darkOrange dark:hover:text-shadow-none drop-shadow-lg text-shadow dark:text-shadow-dark
            hover:text-shadow-none active:text-shadow-none dark:active:text-shadow-none border-2 py-2 px-6 dark:active:bg-darkerOrange dark:active:border-darkerOrange rounded-sm active:bg-darkBlue active:border-darkerBlue'>
            SEND
          </button>
        </div>
      </GenContainer>


    </div>
  )
}

export default Home