import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import IconButton from './Buttons/IconButton';
import { IoIosArrowForward } from 'react-icons/io';

interface ProjectCardProps {
  large?: boolean;
  title: string;
  description: string;
  techStack?: { icon: IconType; color: string }[];
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ description, techStack, large, link, title }) => {
  return (
    <div className={`${large ? 'col-span-2' : 'col-span-1'} p-8 dark:bg-[#10111a] bg-[#9896c04b] rounded-xl`}>
      <div className="absolute top-0 right-0 w-20 h-10 bg-white"></div>
      <div className="md:space-y-4 space-y-1 h-32">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="leading-7 dark:text-[#ffffff91]">{description}</p>
      </div>
      <div className="w-9/10 h-[2px] dark:bg-white bg-black rounded-full" />
      <div className="flex flex-row w-full h-8 place-content-between mt-5 px-2">
        <div className="flex flex-row space-x-5">
          {techStack &&
            techStack.map((tech) => {
              const Icon = tech.icon;
              return <Icon size={38} color={tech.color} key={`${tech.icon}-icon`} />;
            })}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <IconButton Icon={IoIosArrowForward} size={35} onClick={() => {}} />
        </a>
      </div>
    </div>
  );
};
