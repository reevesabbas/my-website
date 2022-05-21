import React, { createElement } from 'react';
import type { NextPage } from 'next'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FcSupport, FcBriefcase, FcFeedback, FcFilmReel, FcPlanner } from 'react-icons/fc'
import { SiHtml5, SiTypescript, SiReact, SiStyledcomponents, SiTailwindcss, SiJest, SiExpress } from 'react-icons/si'

import Navbar from '../components/Navbar/Navbar';
import GenContainer from '../components/GenContainer/GenContainer';
import SocialButtons from '../components/Buttons/SocialButtons';
import ContactForm from '../components/ContactForm/ContactForm';
import HobbieList from '../components/HobbyList/HobbyList';
import Carousel from '../components/ProjectCarousel/Carousel';
import SkillsList from '../components/Skills/SkillsList';
import IconButton from '../components/Buttons/IconButton';
import ScrollButton from '../components/Buttons/ScrollButton';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='content-container'>

      <Head>
        <meta charSet='UTF-8' />
        <meta name='application-name' content='reevesabbas.com' key='website name'/>
        <meta name='author' content='Reeves Abbas | Full Stack Developer' key='title'/>
        <meta name='description' content='Reeves Abbas is a Full-Stack Software Engineer that works with
        numerous frameworks and languages such as- JS, CSS, HTML5 and React. Click to learn more.' key='description'/>
      </Head>

      <Navbar />

      {/* Intro Container */}

      <section id='home' className='flex sm:px-10 px-2 sm:mt-[200px] mt-[150px]'>
        <div className='flex flex-col justify-end space-y-5 text-center md:text-left'>
          <h1> Reeves Abbas</h1>
          <h2 className='font-yeseva text-blue dark:text-orange text-2xl'> A Full Stack Developer </h2>
          <p className='text-center md:text-left'> Hey, welcome to my personal website; developed with 
          NextJS, Typescript and Tailwind CSS. I&apos;m a 20 year old student majoring in Software Engineering at the University of Michigan in the US.
          I&apos;m always seeking more opportunities to nurture my talents and use them for creating software I am
          proud of. Thank you for visiting, I hope you like what you see!
          </p>
          <SocialButtons />
        </div>
      </section>
      

      {/* Skills Container */}

      <GenContainer id='skills' title={'Skills'} icon={<FcSupport size={40}/>}>
        <p> These are just some of the dev tools I feel most confident with to use in my projects. </p>
        <SkillsList size={80}/>
      </GenContainer>


      {/* Projects Container */}
      
      <GenContainer id='projects' title='Projects' icon={<FcBriefcase size={40}/>}>
       <p> Here is a brief overview of some of the projects I have worked on. </p>
        <Carousel />
      </GenContainer>

      {/* Interests Container */}

      <GenContainer id='interests' title='Interests/Hobbies' icon={<FcFilmReel size={40}/>}>
        <p> I&apos;d like to share some of my favorite music, games and anime. With a nice little animation that my mentor and friend, Kieran helped me with.
           Check out some of his work <u> <a href='https://github.com/KieranVieira' target='_blank' rel='noopener noreferrer' > here.</a></u></p>
        <HobbieList />
      </GenContainer>

      {/** What's Next Container */}

      <GenContainer title={`What's Next?`} icon={<FcPlanner size={40}/>}>
        <p> As I continue my work on current projects- I&apos;m always open to collaborations. I am also seeking employment, if you have any questions or you&apos;re interested
          please contact me below.
        </p>
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

      <ScrollButton />

    </div>
  )
}

export default Home