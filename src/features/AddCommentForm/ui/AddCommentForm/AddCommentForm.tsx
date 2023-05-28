import {memo, useCallback} from 'react';
import {classNames as cn} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Input} from 'shared/ui/Input/Input';
import {Button} from 'shared/ui/Button/Button';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getAddCommentFormError,
  getAddCommentFormText
} from '../../model/selectors/addCommentFormSelectors';
import s from './AddCommentForm.module.scss';
import {addCommentFormActions, addCommentFormReducer} from '../../model/slices/addCommentFormSlice';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo(({className, onSendComment}: AddCommentFormProps) => {
  const {t} = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(s.addCommentForm, {}, [className])}>
        <Input
          className={s.input}
          label={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
