import {userActions} from 'entities/User';
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {loginByUsername} from './loginByUsername';

describe('loginByUsername.test', () => {
  test('succes login', async () => {
    const userValue = {username: '123', id: '1'};

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValueOnce(Promise.resolve({data: userValue}));
    const res = await thunk.callThunk({username: '123', password: '123'});

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValueOnce(Promise.resolve({status: 403}));
    const res = await thunk.callThunk({username: '123', password: '123'});

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual('error');
  });
});
