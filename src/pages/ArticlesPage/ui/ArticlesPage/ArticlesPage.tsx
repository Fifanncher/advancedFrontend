import {classNames as cn} from 'shared/lib/classNames/classNames';
import {memo} from 'react';
import {ArticleList, ArticleView} from 'entities/Article';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({className}: ArticlesPageProps) => (
  <div className={cn(s.articlesPage, {}, [className])}>
    <ArticleList
      isLoading
      view={ArticleView.BIG}
      articles={[]}
    />
  </div>
);

export default memo(ArticlesPage);
