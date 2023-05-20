import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {memo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Text, TextAlign, TextSize} from 'shared/ui/Text/Text';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import {
  getArticleDetailsIsLoading,
  getArticleDetailsData,
  getArticleDetailsError
} from '../../model/selectors/articleDetails';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import s from './ArticleDetails.module.scss';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import {ArticleBlock, ArticleBlockType} from '../../model/types/article';
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={s.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={s.block} block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={s.block} block={block} />;
    default:
      return null;
  }
};

export const ArticleDetails = memo(({className, id}: ArticleDetailsProps) => {
  const {t} = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width={200} height={200} border="50%" className={s.avatar} />
        <Skeleton width={300} height={32} className={s.title} />
        <Skeleton width={600} height={24} className={s.skeleton} />
        <Skeleton width="100%" height={200} className={s.skeleton} />
        <Skeleton width="100%" height={200} className={s.skeleton} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = (
      <>
        <div className={s.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={s.avatar} />
        </div>
        <Text
          className={s.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={s.articleInfo}>
          <EyeIcon className={s.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={s.articleInfo}>
          <CalendarIcon className={s.icon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(s.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
