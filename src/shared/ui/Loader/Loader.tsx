import {classNames as cn} from 'shared/lib/classNames/classNames';
import './Loader.scss';

export interface LoaderProps {
  className?: string;
}

export const Loader = ({className}: LoaderProps) => (
  <div className={cn('lds-spinner', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
