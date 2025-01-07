import React from 'react';
interface Props {
  children?: React.ReactNode;
  onClick?: (param?: any) => void;
  active: boolean;
}

const HobbyNavBtn: React.FC<Props> = ({ children, onClick, active, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`${active
        ? ' bg-darkBlue border-0 scale-110 text-white'
        : 'text-lighterGray hover:scale-[5px] scale-90 border-[1.5px]'
        }
        border-lightGray px-4 py-[3px] rounded-md font-fjalla text-lg duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default HobbyNavBtn;
