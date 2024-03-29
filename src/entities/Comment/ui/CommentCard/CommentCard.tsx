import {memo} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Text} from 'shared/ui/Text/Text';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {Comment} from '../../model/types/comment';
import s from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({className, comment, isLoading}: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={cn(s.commentCard, {}, [className, s.loading])}>
        <div className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={s.username} />
        </div>
        <Skeleton width="100%" height={50} className={s.text} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={cn(s.commentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={s.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={s.username} title={comment.user.username} />
      </AppLink>
      <Text className={s.text} text={comment.text} />
    </div>
  );
});
