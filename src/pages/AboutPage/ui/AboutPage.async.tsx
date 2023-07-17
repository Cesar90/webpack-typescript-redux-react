import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'))
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // DO NOT DO THIS IN REAL PROJECTS!!!!! WE DO FOR THE COURSE!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
