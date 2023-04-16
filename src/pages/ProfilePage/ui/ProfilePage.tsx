import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';
// import s from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
  const {t} = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn('', {}, [className])}>
        {t('PROFILE PAGE')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
