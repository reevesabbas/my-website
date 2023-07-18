import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

interface Props {
  title: string;
  icon?: IconBaseProps;
  children: React.ReactNode;
  body?: string;
  id?: string;
}

const GenContainer: React.FC<Props> = ({ children, title, icon, id, body, ...rest }) => {
  return (
    <section id={id} className="md:max-w-[1250px] w-full flex mx-auto">
      <div className="md:w-[1000px] w-full h-full flex mx-auto bg-darkGray rounded-lg sm:p-7 px-3 py-7">
        <div className="w-full flex flex-col justify-center space-y-5 md:text-left text-center">
          <header className="flex flex-row justify-center md:justify-start">
            <h1 className="text-2xl dark:text-white"> {title} </h1>
            <div className="w-fit h-fit pl-4">
              <> {icon} </>
            </div>
          </header>
          <p className="opacity-70 text-white"> {body} </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default GenContainer;
