import {memo} from 'react';
import {classNames as cn, Mods} from 'shared/lib/classNames/classNames';
import s from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT
  } = props;

  return (
    <div className={cn(s.Text, {}, [className, s[theme], s[align]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
