import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';
// import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Navbar.module.scss';

interface NavbarProps{
  className?: string
}

function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onCloseModal = useCallback(() => {
        // setIsAuthModal((prev) => !prev);
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        // setIsAuthModal((prev) => !prev);
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {/* <ThemeSwitcher className={''} /> */}
            <div className={cls.links}>
                {/* <Link to={'/'} className={cls.mainLink}>Main Page</Link>
        <Link to={'/about'}>About</Link> */}
                /
                {/* <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    Main Page
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.RED}
                    to="/about"
                >
                    About
                </AppLink> */}
            </div>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                Sing in
            </Button>
            {/* <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam
            </Modal> */}
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
}

export default Navbar;
