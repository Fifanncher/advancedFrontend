import {StateSchema} from 'app/providers/StoreProvider';
import {ValidateProfileError} from '../../types/profile';
import {getProfileValidateErrors} from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  const validateErrors = [
    ValidateProfileError.INCORRECT_AGE,
    ValidateProfileError.SERVER_ERROR
  ];

  test('should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors
      }
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
