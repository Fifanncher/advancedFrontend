import {classNames as cn} from 'shared/lib/classNames/classNames';
import {memo} from 'react';
import {ArticleListItemSkeleton} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import {ArticleListItem} from '../ArticleListItem/ArticleListItem';
import s from './ArticleList.module.scss';
import {Article, ArticleView} from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((_, index) => (
    <ArticleListItemSkeleton className={s.card} key={index} view={view} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading
  } = props;

  if (isLoading) {
    return (
      <div className={cn('', {}, [className, s[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={s.card}
      key={article.id}
    />
  );

  return (
    <div className={cn('', {}, [className, s[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
