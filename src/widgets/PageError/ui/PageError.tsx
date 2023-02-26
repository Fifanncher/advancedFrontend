import {useTranslation} from 'react-i18next';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

export interface PageErrorProps {
  className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
  const {t} = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  console.log('render PAGE ERROR');

  return (
    <div className={cn(s.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button
        onClick={reloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
