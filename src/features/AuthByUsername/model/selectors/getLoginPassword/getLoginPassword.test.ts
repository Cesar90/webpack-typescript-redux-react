import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123456',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123456');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
