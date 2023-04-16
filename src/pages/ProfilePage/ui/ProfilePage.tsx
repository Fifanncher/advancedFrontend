import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useEffect} from 'react';
import {fetchProfileData, ProfileCard} from 'entities/Profile';
// import s from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
