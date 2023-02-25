import {useState} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(s.Sidebar, {[s.collapsed]: collapsed}, [className])}
    >
      <button type="button" onClick={onToggle}>TOGGLE</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
