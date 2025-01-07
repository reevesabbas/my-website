import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: (param?: any) => void;
}

const TextButton: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <button
      className="font-fjalla text-2xl text-white hover:text-blue hover:scale-105 
      active:translate-y-0.5 active:text-darkBlue ease-in-out duration-150"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TextButton;
