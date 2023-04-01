import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from './reducerManager';
import {StateSchema} from './StateSchema';

export function createReduxStore(
  initialtState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialtState
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
