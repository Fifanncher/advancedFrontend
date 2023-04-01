import {Reducer} from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey
} from 'app/providers/StoreProvider/config/StateSchema';
import {FC, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean
}

type ReducersListEntry = [StateSchemaKey, Reducer];

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({type: `@INIT ${name} reducer`});
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((key: StateSchemaKey) => {
          store.reducerManager.remove(key);
          dispatch({type: `@DESTROY ${key} reducer`});
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
