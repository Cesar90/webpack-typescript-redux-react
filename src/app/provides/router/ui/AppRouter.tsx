import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { AboutPage } from '../../../../pages/AboutPage'
// import { MainPage } from 'pages/MainPage'
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} /> */}
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>Loading...</div>}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
