import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: (param?: any) => void;
  disabled?: boolean;
}

const FormBtn: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button
      className="mx-auto font-fjalla text-3xl text-darkestPurple dark:text-white hover:scale-105 active:translate-y-0.5 ease-in-out duration-150
    hover:bg-blue hover:border-blue dark:hover:text-shadow-none drop-shadow-lg text-shadow dark:text-shadow-dark
    hover:text-shadow-none active:text-shadow-none dark:active:text-shadow-none border-2 py-2 px-6 dark:active:bg-darkerOrange dark:active:border-darkerOrange rounded-sm active:bg-darkBlue active:border-darkerBlue"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FormBtn;
