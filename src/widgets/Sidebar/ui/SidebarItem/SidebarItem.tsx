import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {memo} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';
import s from './SidebarItem.module.scss';
import {SidebarItemType} from '../../models/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
  const {t} = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={cn(s.item, {[s.collapsed]: collapsed})}
    >
      <item.Icon className={s.icon} />
      <span className={s.link}>{t(item.text)}</span>
    </AppLink>
  );
});
