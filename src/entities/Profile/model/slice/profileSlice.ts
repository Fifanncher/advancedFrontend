import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';
import {Profile, ProfileSchema} from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  }
});

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice;
