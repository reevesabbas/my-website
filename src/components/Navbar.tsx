import React, { useState } from 'react';
import { FaBars, FaHome } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { useSpring, animated as a } from 'react-spring';
import Link from 'next/link';

import TextButton from './Buttons/TextButton';

interface Props {
  children?: React.ReactNode;
}

const Navbar: React.FC<Props> = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  const slideAnim = useSpring({
    width: menu ? 100 : 0,
    opacity: menu ? 1 : 0,
    config: { duration: 225 }
  });

  return (
    <>
      <div className={`fixed left-0 right-0 top-0 h-[75px] flex justify-center items-center bg-darkestGray z-10`}>
        {/** Nav */}

        <div className="hidden md:flex">
          <div className="pr-2 pt-1 items-center justify-center drop-shadow-lg">
            <FaHome size={25} color="#fff" />
          </div>
          <div className="flex space-x-[425px]">
            <a href="#home">
              <TextButton>HOME</TextButton>
            </a>
            <div>
              <div className="flex space-x-8">
                <a href="#projects">
                  <TextButton>PROJECTS</TextButton>
                </a>
                <a href="#contact">
                  <TextButton>CONTACT</TextButton>
                </a>
                <Link href="/Abbas_Reeves.pdf">
                  <a>
                    <TextButton>RESUME</TextButton>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Mobile Hamburger */}

      <div className="md:hidden fixed top-5 right-3 flex w-full justify-end pr-5 pt-2 z-20">
        <button
          onClick={handleClick}
          className="hover:scale-110 hover:text-blue active:translate-y-0.5 active:text-darkBlue ease-in-out duration-150 drop-shadow-lg"
        >
          {!menu ? <FaBars size={40} /> : <CgClose size={45} />}
        </button>
      </div>

      {/**Mobile Nav */}

      <a.div
        className={`${
          menu ? '' : 'pointer-events-none'
        } overflow-hidden z-10 md:hidden fixed top-0 bottom-0 right-0 bg-[#e5e6f8] dark:bg-gray flex flex-col justify-center items-center`}
        style={{
          width: slideAnim.width.to((v) => `${v}%`),
          opacity: slideAnim.opacity
        }}
      >
        <div className="flex flex-col space-y-9 text-center">
          <a href="#home">
            <TextButton onClick={() => setMenu(false)}>HOME</TextButton>
          </a>
          <a href="#projects">
            <TextButton onClick={() => setMenu(false)}>PROJECTS</TextButton>
          </a>
          <a href="#contact">
            <TextButton onClick={() => setMenu(false)}>CONTACT</TextButton>
          </a>
          <Link href="/Abbas_Reeves.pdf">
            <a>
              <TextButton>RESUME</TextButton>
            </a>
          </Link>
        </div>
      </a.div>
    </>
  );
};

export default Navbar;
