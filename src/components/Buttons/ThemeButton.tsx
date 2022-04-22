import { useTheme } from 'next-themes';
import React from 'react'

import TextButton from "./TextButton";

interface Props {
  children: React.ReactNode;
  onClick?: (param?: any) => void;
}

const ThemeButton: React.FC<Props> = ({children, onClick, ...rest}) => {
  const {theme, setTheme} = useTheme();
  return (
    <TextButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'LIGHT' : 'DARK'}
    </TextButton>
  )
}

export default ThemeButton