import {classNames as cn} from 'shared/lib/classNames/classNames';
import {Loader} from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => (
  <div className={cn(s.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
