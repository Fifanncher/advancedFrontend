import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTheme, Theme} from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {memo} from 'react';

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={cn('', {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
