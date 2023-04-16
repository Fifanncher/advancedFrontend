import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {memo} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import s from './SidebarItem.module.scss';
import {SidebarItemType} from '../../models/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
  const {t} = useTranslation();

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
