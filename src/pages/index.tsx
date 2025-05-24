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
        <link rel="shortcut Icon" href="/favIcon.ico" />
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

      <section id="home" className="flex px-2">
        <div className="flex flex-col justify-end space-y-5 text-center md:text-left">
          <h1> Hi, I&apos;m Reeves Abbas </h1>
          <h2 className="text-blue md:text-3xl text-2xl">Software Developer</h2>
          <p className="text-center md:text-left text-white">
            Based in the United States, working as a Full-Stack Developer at Loumia Inc.
            I enjoy coding, but what I enjoy most is collaborating with others to achieve a common goal.
            Applying our skillets and creativity to the production of a project or idea is an immense privilege that I am always looking forward to.
          </p>
        </div>
      </section>

      {/* Projects Container */}

      <GenContainer id="projects" title="Portfolio" Icon={FcBriefcase}>
        <ProjectGrid />
      </GenContainer>

      {/* Skills Container */}

      <GenContainer id="skills" title={'Skills'} Icon={FcSupport}>
        <SkillsList size={60} />
      </GenContainer>

      {/* Interests Container */}

      <GenContainer id="interests" title="Interests/Hobbies" Icon={FcFilmReel}>
        <HobbieList />
      </GenContainer>

      {/** What's Next Container */}

      <GenContainer
        title={`What's Next?`}
        Icon={FcPlanner}
        body="While I continue to maintain code and update my personal projects, I am always looking for more opportunities to develop myself and others' experiences further."
      >
        { }
      </GenContainer>

      {/* Contact Container */}

      <GenContainer
        id="contact"
        title="Contact"
        Icon={FcFeedback}
        body="Please feel free to contact me, either to connect or simply give a tip. Any feedback is welcomed and appreciated. "
      >
        <ContactForm />
      </GenContainer>

      <footer className="opacity-60">
        <div className="w-full bg-white h-[1px] rounded-lg" />
        <div className="flex flex-row justify-between py-12 items-center">
          <div>
            <p className="text-xl">Reeves Abbas</p>
            <p>@ 2023</p>
          </div>
          <SocialButtons />
        </div>
      </footer>

      <ScrollButton />
    </div>
  );
};

export default Home;
