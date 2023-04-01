import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {memo, useCallback} from 'react';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({className}: LoginFormProps) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((val: string) => {
    dispatch(loginActions.setUsername(val));
  }, [dispatch]);

  const onChangePassword = useCallback((val: string) => {
    dispatch(loginActions.setPassword(val));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cn(s.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {
        error ? (
          <Text
            text={t('Вы ввели неверный логин или пароль')}
            theme={TextTheme.ERROR}
          />
        ) : null
      }
        <Input
          autoFocus
          type="text"
          className={s.input}
          label={t('Введите username')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={s.input}
          label={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={s.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
