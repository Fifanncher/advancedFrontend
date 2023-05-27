import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text/Text';
import s from './CommentList.module.scss';
import {Comment} from '../../model/types/comment';
import {CommentCard} from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({className, comments, isLoading}: CommentListProps) => {
  const {t} = useTranslation();

  return (
    <div className={className}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              isLoading={isLoading}
              comment={comment}
              className={s.comment}
            />
          ))
          : <Text text={t('Комментарии отсутстувуют')} />
      }
    </div>
  );
});
