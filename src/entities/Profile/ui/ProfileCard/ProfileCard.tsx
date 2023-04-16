import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError';
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
  const {t} = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={cn(s.ProfileCard, {}, [className])}>
      <div className={s.header}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE} className={s.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          label={t('Ваше имя')}
          value={data?.first}
          className={s.input}
        />
        <Input
          label={t('Ваша фамилия')}
          value={data?.lastname}
          className={s.input}
        />
      </div>
    </div>
  );
};
