import {memo} from 'react';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
  const {t} = useTranslation('article-details');
  const {id} = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={className}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={className}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
