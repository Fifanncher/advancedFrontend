import {memo, useState} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {SidebarItemList} from '../../models/items';
import s from './Sidebar.module.scss';
import {SidebarItem} from '../SidebarItem/SidebarItem';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {
          SidebarItemList.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              collapsed={collapsed}
            />
          ))
        }
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </div>
  );
});
