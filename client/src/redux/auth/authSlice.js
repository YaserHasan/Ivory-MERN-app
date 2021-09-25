import { createSlice } from '@reduxjs/toolkit';

import { register, login, getUserData, logout } from './authActions';

const initialState = {
    loading: false,
    logoutLoading: false,
    error: null,
    success: null,
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: {
        [register.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.success = null;
            state.user = null;
            
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = action.payload.message;
            state.user = null;
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = null;
            state.user = null;
        },

        [login.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.success = null;
            state.user = null;
        },
        [login.fulfilled]: (state, action) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload.user));
            state.loading = false;
            state.user = action.payload.user;
            state.error = null;
            state.success = null;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
            state.success = null;
        },

        [getUserData.pending]: (state) => {
            
        },
        [getUserData.fulfilled]: (state, action) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload.user));
            state.loading = false;
            // to avoid unnecessary renders and weird bugs
            if (!state.user)
                state.user = action.payload.user;
            state.error = null;
            state.success = null;
        },
        [getUserData.rejected]: (state, action) => {
            sessionStorage.removeItem('user');
            state.loading = false;
            state.user = null;
            state.error = null;
            state.success = null;
        },

        [logout.pending]: (state) => {
            state.logoutLoading = true;
            state.error = null;
            state.success = null;
        },
        [logout.fulfilled]: (state, action) => {
            sessionStorage.removeItem('user');
            state.logoutLoading = false;
            state.user = null;
            state.error = null;
            state.success = null;
        },
        [logout.rejected]: (state, action) => {
            state.logoutLoading = false;
        },
    }
});

export default authSlice.reducer;
