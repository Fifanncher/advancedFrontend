import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({className}: ArticlesPageProps) => {
  const {t} = useTranslation();

  return (
    <div className={cn(s.articlesPage, {}, [className])}>
      {t('ARTICLES PAGE')}
    </div>
  );
};

export default memo(ArticlesPage);
