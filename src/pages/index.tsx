import React from 'react';
import type { NextPage } from 'next'
import { FcSupport, FcBriefcase, FcFeedback, FcFilmReel, FcPlanner } from 'react-icons/fc'
import { SiTypescript, SiReact, SiStyledcomponents, SiTailwindcss, SiJest, SiExpress } from 'react-icons/si'

import Navbar from '../components/Navbar';
import GenContainer from '../components/GenContainer';
import SocialButtons from '../components/Buttons/SocialButtons';
import ContactForm from '../components/ContactForm';
import HobbieList from '../components/HobbieList/HobbieList';
import Carousel from '../components/Carousel';

const Home: NextPage = () => {
  return (
    <div className='content-container'>

      <Navbar />

      {/* Intro Container */}

      <section id='home' className='flex sm:px-10 px-2 mt-[200px]'>
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
        <p> These are just some of the dev tools I feel most confident with to use in my projects. </p>
          <ul className='flex flex-wrap text-center justify-center md:space-x-12 space-x-5 py-5'>
            <li className='p-3'>
              <SiTypescript size={80} fill='#007acc'/>
              <p className='pt-4'> Typescript </p>
            </li>
            <li className='p-3'>
              <SiJest size={80} fill='#a0444c'/>
              <p className='pt-4'> Jest </p>
            </li>
            <li className='p-3'>
              <SiExpress size={80} />
              <p className='pt-4'> Express </p>
            </li>
            <li className='p-3'>
              <SiStyledcomponents size={80} fill='#bd717d'/>
              <p className='pt-4 text-lg'> Styled Comp. </p>
            </li>
            <li className='p-3'>
              <SiReact size={80} fill='#61dbfb' />
              <p className='pt-4'> React </p>
            </li>
            <li className='p-3'>
              <SiTailwindcss size={80} fill='#34b4ec' />
              <p className='pt-4'> Tailwind </p>
            </li>
          </ul>
      </GenContainer>


      {/* Projects Container */}
      
      <GenContainer id='projects' title='Projects' icon={<FcBriefcase size={40}/>}>
       <p> Here is a brief overview of some of the projects I have worked on. </p>
        <Carousel />
      </GenContainer>

      {/** What's Next Container */}

      <GenContainer title={`What's Next?`} icon={<FcPlanner size={40}/>}>
        <p> Currently seeking employment </p>
      </GenContainer>

      {/* Interests Container */}

      <GenContainer id='interests' title='Interests/Hobbies' icon={<FcFilmReel size={40}/>}>
        <p> Here are some of my favorite music, games and anime I'd like to share.  </p>
        <HobbieList />
      </GenContainer>


      {/* Contact Container */}

      <GenContainer id='contact' title='Contact' icon={<FcFeedback size={40}/>}>
        <p> Feel free to leave me a message here or email me at: <em className='select-all'> reeves.abbas@gmail.com </em> </p>
        <ContactForm />
      </GenContainer>

      <footer className='h-full flex flex-col mx-auto justify-center items-center py-14 space-y-5'>
        <SocialButtons />
        <p> Thanks again for visiting! :-) </p>
      </footer>


    </div>
  )
}

export default Home