import { classNames as cn } from "shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from "shared/ui/Button/Button";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
        onClick={toggleTheme}
        theme={ThemeButton.CLEAR}
        className={cn(s.ThemeSwitcher, {}, [className])}
    >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
