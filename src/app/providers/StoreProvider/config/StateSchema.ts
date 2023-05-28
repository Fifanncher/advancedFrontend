import {UserSchema} from 'entities/User/model/types/user';
import {CounterSchema} from 'entities/Counter';
import {LoginSchema} from 'features/AuthByUsername';
import {ProfileSchema} from 'entities/Profile';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject
} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {NavigateOptions, To} from 'react-router-dom';
import {ArticleDetailsSchema} from 'entities/Article';
import {ArticleDetailsCommentsSchema} from 'pages/ArticleDetailsPage';
import {AddCommentFormSchema} from 'features/AddCommentForm';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // Async reducers
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
  articleDetails?: ArticleDetailsSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema,
  addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
