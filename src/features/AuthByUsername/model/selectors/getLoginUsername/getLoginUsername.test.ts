import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123456',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123456');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
