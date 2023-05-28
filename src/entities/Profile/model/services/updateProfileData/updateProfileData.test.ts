import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {ValidateProfileError} from '../../types/profile';
import {updateProfileData} from './updateProfileData';

const data = {
  id: '1',
  username: 'admin',
  first: 'Иван',
  lastname: 'Фифанн',
  age: 29,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Tyumen'
};

describe('updateProfileData.test', () => {
  test('succes', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });

    thunk.api.put.mockReturnValueOnce(Promise.resolve({data}));

    const res = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(data);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {...data, lastname: ''}
      }
    });
    const res = await thunk.callThunk();

    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ]);
  });
});
