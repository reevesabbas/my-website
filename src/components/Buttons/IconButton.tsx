import React from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  Icon: IconType;
  children?: React.ReactNode;
  onClick?: (param?: any) => void;
  size: number;
  addStyle?: string;
}

const IconButton: React.FC<Props> = ({ Icon, children, onClick, size, addStyle, ...rest }) => {
  return (
    <button
      className={`hover:scale-110 text-white hover:text-blue active:translate-y-0.5 active:text-darkerBlue ease-in-out
       duration-150 drop-shadow-lg ${addStyle}`}
      onClick={onClick}
      {...rest}
    >
      <Icon size={size} />
    </button>
  );
};

export default IconButton;
