import {StateSchema} from 'app/providers/StoreProvider';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import {getProfileData} from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profileData', () => {
    const data = {
      username: 'admin',
      first: 'Иван',
      lastname: 'Фифанн',
      age: 29,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Tyumen'
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
