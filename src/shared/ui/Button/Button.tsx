import { ButtonHTMLAttributes, FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import s from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      className={cn(s.Button, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
