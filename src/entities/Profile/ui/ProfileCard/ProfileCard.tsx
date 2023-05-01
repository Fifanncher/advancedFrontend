import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {Loader} from 'shared/ui/Loader/Loader';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Currency, CurrencySelect} from 'entities/Currency';
import {Country, CountrySelect} from 'entities/Country';
import {Profile} from '../../model/types/profile';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUserName?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const {t} = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={cn(s.ProfileCard, {}, [className, s.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(s.ProfileCard, {}, [className, s.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={cn(s.ProfileCard, {[s.editing]: !readonly}, [className])}>
      <div>
        {
          data?.avatar ? (
            <div className={s.avatarWrapper}>
              <Avatar src={data?.avatar} />
            </div>
          ) : null
        }
        <Input
          label={t('Ваше имя')}
          value={data?.first}
          className={s.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          label={t('Ваша фамилия')}
          value={data?.lastname}
          className={s.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          label={t('Ваш возраст')}
          value={data?.age}
          className={s.input}
          onChange={onChangeAge}
          readonly={readonly}
          type="number"
        />
        <Input
          label={t('Город')}
          value={data?.city}
          className={s.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          label={t('Имя пользователя')}
          value={data?.username}
          className={s.input}
          onChange={onChangeUserName}
          readonly={readonly}
        />
        <Input
          label={t('Аватар')}
          value={data?.avatar}
          className={s.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={s.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={s.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
