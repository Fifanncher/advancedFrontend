import {memo, ReactNode} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={cn(s.AppLink, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
