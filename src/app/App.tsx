import './styles/index.scss';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './provides/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './provides/router';

function App() {
    const { theme, toggleTheme } = useTheme();
    const bool = true;
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
