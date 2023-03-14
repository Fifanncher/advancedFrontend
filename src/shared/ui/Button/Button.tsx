import {ButtonHTMLAttributes, FC} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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
  square?: boolean,
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={cn(s.Button, {[s.square]: square}, [className, s[theme], s[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
