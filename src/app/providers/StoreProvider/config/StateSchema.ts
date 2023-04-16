import {UserSchema} from 'entities/User/model/types/user';
import {CounterSchema} from 'entities/Counter';
import {LoginSchema} from 'features/AuthByUsername';
import {ProfileSchema} from 'entities/Profile';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject
} from '@reduxjs/toolkit';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // Async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
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
