import {classNames as cn} from 'shared/lib/classNames/classNames';
import {memo} from 'react';
import {Text} from 'shared/ui/Text/Text';
import s from './ArticleImageBlockComponent.module.scss';
import {ArticleImageBlock} from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const {className, block} = props;

  return (
    <div className={cn(s.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={s.img} />
      {
        block.title && (
          <Text text={block.title} />
        )
      }
    </div>
  );
});
