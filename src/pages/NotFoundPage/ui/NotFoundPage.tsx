import {useTranslation} from 'react-i18next';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import s from './NotFoundPage.module.scss';

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
  const {t} = useTranslation('notFoundPage');

  return (
    <div className={cn(s.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
