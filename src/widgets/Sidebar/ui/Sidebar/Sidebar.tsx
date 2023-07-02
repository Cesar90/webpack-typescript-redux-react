import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps{
  className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToogle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div 
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToogle}>Toogle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

export default Sidebar
