import { ReactElement } from 'react';
import { BsFiletypeSql } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiHtml5, SiJest, SiReact, SiStyledcomponents, SiTailwindcss, SiTypescript, SiCsharp, SiPostgresql } from 'react-icons/si';

type Skills = {
  name: string;
  icon: ReactElement;
  link: string;
  fill: string;
};

const SKILLS = [
  { name: 'Typescript', icon: SiTypescript, link: 'https://www.typescriptlang.org/', fill: '#007acc' },
  { name: 'React', icon: SiReact, link: 'https://reactjs.org/', fill: '#61dbfb' },
  { name: 'C#', icon: SiCsharp, link: 'https://learn.microsoft.com/en-us/dotnet/csharp/', fill: '#239120' },
  { name: 'Entity Framework', icon: SiCsharp, link: 'https://learn.microsoft.com/en-us/ef/', fill: '#68217A' },
  { name: 'SQL', icon: BsFiletypeSql, link: 'https://en.wikipedia.org/wiki/SQL', fill: '#336791' },
  { name: 'Jest', icon: SiJest, link: 'https://jestjs.io/docs/getting-started', fill: '#b6434d' },
  { name: 'Tailwind', icon: SiTailwindcss, link: 'https://tailwindcss.com/', fill: '#34b4ec' },
  { name: 'Express', icon: SiExpress, link: 'https://expressjs.com/', fill: '#FFF' },
  { name: 'NodeJs', icon: FaNodeJs, link: 'https://nodejs.org/en/', fill: '#3c873a' },
  { name: 'HTML5', icon: SiHtml5, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', fill: '#e34c26' },
];
export default SKILLS;
export type { Skills };
