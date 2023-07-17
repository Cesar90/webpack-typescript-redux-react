import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // DO NOT DO THIS IN REAL PROJECTS!!!!! WE DO FOR THE COURSE!
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
