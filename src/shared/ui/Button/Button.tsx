import {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import {classNames as cn, Mods} from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [s.square]: square,
    [s.disabled]: disabled
  };

  return (
    <button
      type="button"
      className={cn(s.Button, mods, [className, s[theme], s[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
