import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {fetchProfileData} from './fetchProfileData';

const data = {
  username: 'admin',
  first: 'Иван',
  lastname: 'Фифанн',
  age: 29,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Tyumen'
};

describe('fetchProfileData.test', () => {
  test('succes', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValueOnce(Promise.resolve({data}));

    const res = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValueOnce(Promise.resolve({status: 403}));
    const res = await thunk.callThunk();

    expect(res.meta.requestStatus).toBe('rejected');
  });
});
