import React from 'react';
import { GrGithub, GrInstagram, GrTwitter } from 'react-icons/gr';
import IconButton from './IconButton';

const SocialButtons = () => {
  return (
    <div className="flex flex-row md:justify-start justify-center space-x-5">
      <a href="https://twitter.com/reevfs" target="_blank" rel="noopener noreferrer">
        <IconButton Icon={GrTwitter} size={35}></IconButton>
      </a>
      <a href="https://github.com/reevesabbas" target="_blank" rel="noopener noreferrer">
        <IconButton Icon={GrGithub} size={35}></IconButton>
      </a>
      <a href="https://www.instagram.com/reeves.ab/" target="_blank" rel="noopener noreferrer">
        <IconButton Icon={GrInstagram} size={35}></IconButton>
      </a>
    </div>
  );
};

export default SocialButtons;
