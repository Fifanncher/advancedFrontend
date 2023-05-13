import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
  const {t} = useTranslation('article');

  return (
    <div className={cn(s.articleDetailsPage, {}, [className])}>
      {t('ARTICLE DETAILS')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
