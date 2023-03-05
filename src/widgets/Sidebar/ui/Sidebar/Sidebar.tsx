import {useState} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
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
      data-testid="sidebar"
      className={cn(s.Sidebar, {[s.collapsed]: collapsed}, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        TOGGLE
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
