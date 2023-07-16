import React, { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

function App() {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={
            classNames('app', { hovered: true }, [theme, 'cls1', 'cls2'])
        }
        >
            {/* <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About</Link> */}
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
            {/* <button onClick={toggleTheme}>TOOGLE</button> */}
        </div>
    );
}

export default App;
