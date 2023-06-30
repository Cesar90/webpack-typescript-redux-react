import './styles/index.scss';
import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './provides/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './provides/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme()
  const bool = true;
  return (
    <div className={
      classNames('app', {hovered:true}, [theme,'cls1','cls2'])
    }>
      {/* <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About</Link> */}
      <Navbar />
      <AppRouter />
      {/* <button onClick={toggleTheme}>TOOGLE</button> */}
    </div>
  )
}

export default App
