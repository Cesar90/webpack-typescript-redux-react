import React from 'react'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from '../Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps{
  className?: string;
}

const LangSwitcher = ({className}:LangSwitcherProps) => {
  const { t , i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toogle} 
      className={classNames(cls.LangSwitcher,{},[className])}>
      {t('Translate')}
    </Button>
  )
}

export default LangSwitcher