import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps{
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar,{}, [className])}>
      <ThemeSwitcher className={''} />
      <div className={cls.links}>
        {/* <Link to={'/'} className={cls.mainLink}>Main Page</Link>
        <Link to={'/about'}>About</Link> */}
        <AppLink 
          theme={AppLinkTheme.SECONDARY} 
          to={'/'} 
          className={cls.mainLink}>
            Main Page
        </AppLink>
        <AppLink
          theme={AppLinkTheme.RED}  
          to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  )
}

export default Navbar
