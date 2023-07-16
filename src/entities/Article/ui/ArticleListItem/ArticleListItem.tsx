import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {Text} from 'shared/ui/Text/Text';
import {Icon} from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import {Card} from 'shared/ui/Card/Card';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import s from './ArticleListItem.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView
} from '../../model/types/article';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {className, article, view} = props;
  const {t} = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={s.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={s.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div className={cn('', {}, [className, s[view]])}>
        <Card className={s.card}>
          <div className={s.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={s.username} />
            <Text text={article.createdAt} className={s.date} />
          </div>
          <Text title={article.title} className={s.title} />
          {types}
          <img src={article.img} className={s.img} alt={article.title} />
          {textBlock && (
          <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />
          )}
          <div className={s.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn('', {}, [className, s[view]])}>
      <Card className={s.card} onClick={onOpenArticle}>
        <div className={s.imageWrapper}>
          <img alt={article.title} src={article.img} className={s.img} />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={s.title} />
      </Card>
    </div>
  );
});
