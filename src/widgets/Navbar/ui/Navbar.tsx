import {classNames as cn} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import s from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation('navbar');

  return (
    <div className={cn(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={s.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.RED}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
