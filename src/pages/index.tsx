import React from 'react';
import type { NextPage } from 'next';
import { FcSupport, FcBriefcase, FcFeedback, FcFilmReel, FcPlanner } from 'react-icons/fc';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import GenContainer from '../components/GenContainer';
import SocialButtons from '../components/Buttons/SocialButtons';
import ContactForm from '../components/ContactForm';
import HobbieList from '../components/HobbyList/HobbyList';
import SkillsList from '../components/Skills/SkillsList';
import ScrollButton from '../components/Buttons/ScrollButton';
import { ProjectGrid } from '../components/ProjectGrid';

const Home: NextPage = () => {
  return (
    <div className="content-container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="reevesabbas.com" key="website name" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title> Reeves Abbas | Full Stack Developer </title>
        <meta
          name="description"
          content="Reeves Abbas is a Software Engineer that works with
          numerous frameworks and languages such as- JS, CSS, HTML5 and React. Click here for more information."
          key="description"
        />
      </Head>

      <Navbar />

      {/* Intro Container */}

      <section id="home" className="flex sm:px-10 px-2 sm:mt-[200px] mt-[150px]">
        <div className="flex flex-col justify-end space-y-5 text-center md:text-left">
          <h1> Hi, I&apos;m Reeves Abbas </h1>
          <h2 className="text-blue md:text-3xl text-2xl">Software Engineer</h2>
          <p className="text-center md:text-left">
            Welcome to my website! I am currently looking for employment as a software engineer, in the meantime
            I&apos;m working on the projects listed below to expand my experience and stay passionate about developing.
          </p>
          <SocialButtons />
        </div>
      </section>

      {/* Projects Container */}

      <GenContainer id="projects" title="Portfolio" icon={<FcBriefcase size={35} />}>
        <ProjectGrid />
      </GenContainer>

      {/* Skills Container */}

      <GenContainer id="skills" title={'Skills'} icon={<FcSupport size={35} />}>
        <SkillsList size={60} />
      </GenContainer>

      {/* Interests Container */}

      <GenContainer id="interests" title="Interests/Hobbies" icon={<FcFilmReel size={35} />}>
        <HobbieList />
      </GenContainer>

      {/** What's Next Container */}

      <GenContainer
        title={`What's Next?`}
        icon={<FcPlanner size={35} />}
        body="While I continue to maintain code and update my personal projects, I am always looking for more opportunities to develop my experience further. If you have any ideas please feel free to contact me!"
      >
        {}
      </GenContainer>

      {/* Contact Container */}

      <GenContainer
        id="contact"
        title="Contact"
        icon={<FcFeedback size={35} />}
        body="Feel free to leave me a message here or email me at:"
      >
        <p className="italic underline select-all"> reeves.abbas@gmail.com </p>
        <ContactForm />
      </GenContainer>

      <footer className="h-full flex flex-col mx-auto justify-center items-center space-y-5 pb-10">
        <SocialButtons />
        <p> Let us collaborate </p>
      </footer>

      <ScrollButton />
    </div>
  );
};

export default Home;
