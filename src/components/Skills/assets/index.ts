import { ReactElement } from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiHtml5, SiJest, SiReact, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";

type Skills = {
  name: string,
  icon: ReactElement,
  link: string,
  fill: string,
}

const SKILLS = [
  { name: 'Typescript', icon: SiTypescript, link: 'https://www.typescriptlang.org/', fill: '#007acc', },
  { name: 'HTML5', icon: SiHtml5, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', fill: '#e34c26', },
  { name: 'React & React Native', icon: SiReact, link: 'https://reactjs.org/', fill: '#61dbfb', },
  { name: 'Tailwind', icon: SiTailwindcss, link: 'https://tailwindcss.com/', fill: '#34b4ec', },
  { name: 'Jest', icon: SiJest, link: 'https://jestjs.io/docs/getting-started', fill: '#b6434d', },
  { name: 'Styled Components', icon: SiStyledcomponents, link: 'https://styled-components.com/', fill: '#d97d8b', },
  { name: 'Express', icon: SiExpress, link: 'https://expressjs.com/', fill: '#808080', },
  { name: 'NodeJs', icon: FaNodeJs, link: 'https://nodejs.org/en/', fill: '#3c873a', }
]

export default SKILLS;
export type {Skills};