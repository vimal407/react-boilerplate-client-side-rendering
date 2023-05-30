import { createAction, createSlice } from '@reduxjs/toolkit';
import { languages } from 'services/constants';
import { setToken } from 'services/utils';

const initialState = {
  status: 'idle',
  isLoggedIn: false,
  language: languages.english,
};

export const validateUserLogin = createAction('VALIDATE_USER_LOGIN');
export const changeLanguage = createAction('CHANGE_LANGUAGE');

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(validateUserLogin, (state) => {
      state.isLoggedIn = true;
      setToken('xx5542542fdgfdgggsfdgfdgf');
    });

    builder.addCase(changeLanguage, (state, { payload }) => {
      state.language = payload;
    });
  },
});
export const { logout } = loginSlice.actions;

export const selectUserLoggedIn = (state) => state.login.isLoggedIn;
export const selectIsLoading = (state) => state.login.status === 'loading';

export default loginSlice.reducer;
