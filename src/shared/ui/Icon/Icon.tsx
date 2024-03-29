import {classNames as cn} from 'shared/lib/classNames/classNames';
import React, {memo} from 'react';
import s from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const {className, Svg} = props;

  return (
    <Svg className={cn(s.icon, {}, [className])} />
  );
});
