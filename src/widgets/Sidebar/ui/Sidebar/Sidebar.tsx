import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import s from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={cn(s.Sidebar, {[s.collapsed]: collapsed}, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={s.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={s.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={s.item}
        >
          <MainIcon className={s.icon} />
          <span className={s.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={s.item}
        >
          <AboutIcon className={s.icon} />
          <span className={s.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </div>
  );
};
