import { createAsyncThunk } from '@reduxjs/toolkit';

import * as AuthService from '../../services/authService';


export const register = createAsyncThunk(
    'auth/register',
    async ({name, email ,password}) => {
        return await AuthService.register(name, email, password);
    },
);

export const login = createAsyncThunk(
    'auth/login',
    async ({email ,password}) => {
        return await AuthService.login(email, password);
    },
);

export const getUserData = createAsyncThunk(
    'auth/getUserData',
    AuthService.getUserData,
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, {dispatch}) => {
        await dispatch(getUserData());
        return await AuthService.logout();
    },
); 