import { createSlice } from '@reduxjs/toolkit';
import message from 'helpers/Message';
// import { registration, logIn, logOut, refresh, getUser, setUserBalance } from './userOperations';
import { logIn } from './userOperations';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    refreshToken: null,
    userData: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,

    extraReducers: {
        // [registration.pending]: state => {
        //     state.isLoading = true;
        // },
        // [registration.fulfilled]: state => {
        //     state.isLoading = false;
        // },
        // [registration.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     message.error('Registration error', `${action.payload.message}`, 'Ok');
        // },
        [logIn.pending]: state => {
            state.isLoading = true;
        },
        [logIn.fulfilled]: (state, action) => {
            // state.refreshToken = action.payload.refreshToken;
            // state.userData = action.payload.userData;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [logIn.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('LogIn error', `${action.payload.message}`, 'Ok');
        },
        // [logOut.fulfilled]: state => {
        //     state.isLoading = false;
        //     state.isLoggedIn = false;
        //     state.refreshToken = null;
        //     state.userData = null;
        // },
        // [logOut.rejected]: (state, action) => {
        //     message.error('LogIn error', `${action.payload.message}`, 'Ok');
        // },
        // [refresh.pending]: state => {
        //     state.isLoading = true;
        // },
        // [refresh.fulfilled]: (state, action) => {
        //     state.refreshToken = action.payload.newRefreshToken;
        //     state.sid = action.payload.newSid;
        // },
        // [refresh.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     console.log('refresh error: ', action.payload);
        // },
        // [getUser.pending]: state => {
        //     state.isLoading = true;
        // },
        // [getUser.fulfilled]: (state, action) => {
        //     state.userData = action.payload;
        //     state.isLoading = false;
        //     state.isLoggedIn = true;
        // },
        // [getUser.rejected]: (state, action) => {
        //     state.isLoading = false;
        // },
    },
});

export default userSlice.reducer;