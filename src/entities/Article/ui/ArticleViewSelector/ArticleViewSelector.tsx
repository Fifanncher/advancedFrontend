import {memo} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Icon} from 'shared/ui/Icon/Icon';
import s from './ArticleViewSelector.module.scss';
import {ArticleView} from '../../model/types/article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  }
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {className, view, onViewClick} = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={cn(s.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
          <Icon Svg={viewType.icon} className={cn('', {[s.notSelected]: viewType.view !== view})} />
        </Button>
      ))}
    </div>
  );
});
