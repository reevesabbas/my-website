import React  from 'react';
import type { NextPage } from 'next'
import { FcSupport, FcBriefcase, FcFeedback, FcFilmReel, FcPlanner } from 'react-icons/fc'
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';
import GenContainer from '../components/GenContainer/GenContainer';
import SocialButtons from '../components/Buttons/SocialButtons';
import ContactForm from '../components/ContactForm/ContactForm';
import HobbieList from '../components/HobbyList/HobbyList';
import Carousel from '../components/ProjectCarousel/Carousel';
import SkillsList from '../components/Skills/SkillsList';
import ScrollButton from '../components/Buttons/ScrollButton';

const Home: NextPage = () => {
  return (
    <div className='content-container'>

      <Head>
        <meta charSet='UTF-8' />
        <meta name='application-name' content='reevesabbas.com' key='website name'/>
        <link rel='shortcut icon' href='/favicon.ico' />
        <title> Reeves Abbas | Full Stack Developer </title>
        <meta name='description' content='Reeves Abbas is a Developer that works with
          numerous frameworks and languages such as- JS, CSS, HTML5 and React. Click here for more information.' key='description'/>
      </Head>

      <Navbar />

      {/* Intro Container */}

      <section id='home' className='flex sm:px-10 px-2 sm:mt-[200px] mt-[150px]'>
        <div className='flex flex-col justify-end space-y-5 text-center md:text-left'>
          <h1> Reeves Abbas</h1>
          <h2 className='font-yeseva text-blue dark:text-orange text-2xl'> A Full Stack Developer </h2>
          <p className='text-center md:text-left'> 
            Hey, welcome to my website. I am currently working on personal projects to practice various libraries and packages that helped ignite my passion for creating
            meaningful and effective software. I really enjoy using React and TailwindCSS to build maintainable easy-to-read code, implementing useful UI/UX features. 
            Please look around or contact me to learn more and collaborate.
          </p>
          <SocialButtons />
        </div>
      </section>
      

      {/* Skills Container */}

      <GenContainer 
        id='skills'   
        title={'Skills'} 
        icon={<FcSupport size={40}/>}
        body={'These are just some of the dev tools I feel most confident with to use in my projects.'}
      >
        <SkillsList size={80}/>
      </GenContainer>


      {/* Projects Container */}
      
      <GenContainer 
        id='projects' 
        title='Projects'  
        icon={<FcBriefcase size={40}/>}
        body='Here is a brief overview of some of the projects I have worked on.'
      >
        <Carousel />
      </GenContainer>

      {/* Interests Container */}

      <GenContainer 
        id='interests' 
        title='Interests/Hobbies' 
        icon={<FcFilmReel size={40}/>}
        body='I&apos;d like to share some of my favorite shows and music for those interested.'
      >
        <HobbieList />
      </GenContainer>

      {/** What's Next Container */}

      <GenContainer title={`What's Next?`} icon={<FcPlanner size={40}/>}
        body='As I continue my work on current projects- I&apos;m always open to collaborations. I am also seeking employment, if you have any questions or you&apos;re interested
        please contact me below.'
      >
      </GenContainer>


      {/* Contact Container */}

      <GenContainer id='contact' title='Contact' icon={<FcFeedback size={40}/>}
        body='Feel free to leave me a message here or email me at:'
      >
      <p className='italic underline select-all'> reeves.abbas@gmail.com </p>
        <ContactForm />
      </GenContainer>

      <footer className='h-full flex flex-col mx-auto justify-center items-center py-14 space-y-5'>
        <SocialButtons />
        <p> Connect with me. </p>
      </footer>

      <ScrollButton />

    </div>
  )
}

export default Home