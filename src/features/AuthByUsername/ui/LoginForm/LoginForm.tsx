import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps{
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => (
    <div
        className={classNames(cls.LoginForm, {}, [className])}
    >
        <Input
            type="text"
            className={cls.input}
            placeholder="Name"
        />
        <Input
            type="text"
            className={cls.input}
            placeholder="Email"
        />
        <Button className={cls.loginBtn}>
            Login
        </Button>
    </div>
);
