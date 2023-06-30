import React from 'react';
import { Theme, useTheme } from 'app/provides/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps{
  className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button 
      className={classNames(cls.ThemeSwitcher,{}, [])} 
      onClick={toggleTheme}>
       {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} 
    </button>
  )
}

export default ThemeSwitcher
