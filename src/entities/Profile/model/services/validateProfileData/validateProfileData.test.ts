import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import {ValidateProfileError} from '../../types/profile';
import {validateProfileData} from './validateProfileData';

const data = {
  username: 'admin',
  first: 'Иван',
  lastname: 'Фифанн',
  age: 29,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Tyumen'
};

describe('validateProfileData.test', () => {
  test('succes', async () => {
    const res = validateProfileData(data);

    expect(res).toEqual([]);
  });

  test('without first and last names', async () => {
    const res = validateProfileData({...data, first: '', lastname: ''});

    expect(res).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const res = validateProfileData({...data, age: undefined});

    expect(res).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const res = validateProfileData({...data, country: undefined});

    expect(res).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const res = validateProfileData({});

    expect(res).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });
});
