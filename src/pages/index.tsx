import React from 'react';
import type { NextPage } from 'next'
import { FcSupport, FcBriefcase, FcFeedback, FcFilmReel, FcPlanner } from 'react-icons/fc'
import { SiTypescript, SiReact, SiHtml5, SiTailwindcss, SiJest, SiExpress } from 'react-icons/si'

import Navbar from '../components/Navbar';
import GenContainer from '../components/GenContainer';
import SocialButtons from '../components/Buttons/SocialButtons';
import ContactForm from '../components/ContactForm';
import HobbieList from '../components/HobbieList/HobbieList';
import Carousel from '../components/Carousel/Carousel';

const Home: NextPage = () => {
  return (
    <div className='content-container'>

      <Navbar />

      {/* Intro Container */}

      <section className='flex px-10 mt-[200px]'>
        <div className='flex flex-col justify-end space-y-5 text-center md:text-left'>
          <h1> Reeves Abbas</h1>
          <h2 className='font-yeseva text-blue dark:text-orange text-2xl'> A Full Stack Developer </h2>
          <p className='text-center md:text-left'> Hey, welcome to my personal website; developed with 
          NextJS, Typescript and Tailwind CSS. I'm a 20 year old student majoring in Software Engineering at the University of Michigan in the US.
          I'm always seeking more opportunities to nurture my talents and use them for creating software I am
          proud of. Thank you for visiting, I hope you like what you see!
          </p>
          <SocialButtons />
        </div>
      </section>
      

      {/* Skills Container */}

      <GenContainer id='skills' title={'Skills'} icon={<FcSupport size={40}/>}>
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
        <Carousel />
      </GenContainer>

      <GenContainer title={`What's Next?`} icon={<FcPlanner size={40}/>}>
        Something about what I plan on doing next, and future goals.
      </GenContainer>

      {/* Interests Container */}

      <GenContainer id='interests' title='Interests/Hobbies' icon={<FcFilmReel size={40}/>}>
        Aside from my interests developing, I'd love to share some of my favorite Games, Music, and Anime. In hopes to
        collaborate with others to produce tools that will supplement these hobbies for their communities.
        <HobbieList />
      </GenContainer>


      {/* Contact Container */}

      <GenContainer id='contact' title='Contact' icon={<FcFeedback size={40}/>}>
        Feel free to leave me a message here or email me at: <em> reeves.abbas@gmail.com </em>
        <ContactForm />
      </GenContainer>

      <div className='h-[150px] flex mx-auto justify-center items-center mb-5'>
        <SocialButtons />
      </div>


    </div>
  )
}

export default Home