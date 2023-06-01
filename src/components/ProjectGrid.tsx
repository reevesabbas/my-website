import React from 'react';
import { ProjectCard } from './ProjectCard';
import { FaReact } from 'react-icons/fa';
import { SiElectron, SiExpress, SiTypescript } from 'react-icons/si';

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <ProjectCard
        title={'Pit Guru'}
        description="A desktop app with highly customizable overlays for sim-racing game iRacing."
        large={true}
        techStack={[
          { icon: FaReact, color: '#61dbfb' },
          { icon: SiElectron, color: '#50848c' },
          { icon: SiTypescript, color: '#007acc' }
        ]}
        link="https://update.pitguru.app/"
      />
      <ProjectCard
        title={'Journal'}
        description="A mobile journal application."
        techStack={[
          { icon: SiTypescript, color: '#007acc' },
          { icon: FaReact, color: '#61dbfb' }
        ]}
        link="https://github.com/reevesabbas/journal"
      />
      <ProjectCard
        title={'Ergo'}
        description="A task/log app API."
        techStack={[
          { icon: SiTypescript, color: '#007acc' },
          { icon: SiExpress, color: '#FFF' }
        ]}
        link="https://github.com/Ergo-Tasks/ergo-api"
      />
      <ProjectCard
        title={'VJR Custom Homes'}
        description="Company website I did animations for."
        techStack={[{ icon: FaReact, color: '#61dbfb' }]}
        link="https://www.vjrcustomhomes.com/"
      />
      <ProjectCard
        title={'This Website'}
        description="A portfolio showcase."
        techStack={[
          { icon: SiTypescript, color: '#007acc' },
          { icon: FaReact, color: '#61dbfb' }
        ]}
        link="https://reevesabbas.com/"
      />
    </div>
  );
};
