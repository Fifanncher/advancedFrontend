import {CSSProperties, useMemo} from 'react';
import {classNames as cn, Mods} from 'shared/lib/classNames/classNames';
import s from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt
  } = props;

  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => ({
    height: size || 100,
    width: size || 100
  }), [size]);

  return (
    <img
      src={src}
      style={styles}
      className={cn(s.Avatar, mods, [className])}
      alt={alt}
    />
  );
};
