import {memo} from 'react';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useDispatch, useSelector} from 'react-redux';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import s from './ArticleDetailsPage.module.scss';
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
  const {t} = useTranslation('article-details');
  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={className}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(s.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={s.commentTitle} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
