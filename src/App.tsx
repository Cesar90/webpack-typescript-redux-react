import React, { Suspense } from 'react'
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {
  const { theme, toggleTheme } = useTheme()
  const bool = true;
  return (
    <div className={
      classNames('app', {hovered:true}, [theme,'cls1','cls2'])
    }>
      <button onClick={toggleTheme}>TOOGLE</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageAsync />} />
            <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
