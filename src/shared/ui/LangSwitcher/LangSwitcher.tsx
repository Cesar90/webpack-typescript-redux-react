import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from '../Button/Button';

interface LangSwitcherProps{
  className?: string;
}

function LangSwitcher({ className }:LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toogle}
            className={classNames('', {}, [className])}
        >
            {t('Translate')}
        </Button>
    );
}

export default LangSwitcher;
