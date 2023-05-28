import {addCommentFormActions} from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getUserAuthData} from 'entities/User';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Comment} from 'entities/Comment';
import {getArticleDetailsData} from 'entities/Article';
import {getAddCommentFormText} from '../../selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (_, thunkAPI) => {
    const {
      extra, rejectWithValue, getState, dispatch
    } = thunkAPI;

    const userData = getUserAuthData(getState());
    const text = getAddCommentFormText(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(addCommentFormActions.setText(''));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
