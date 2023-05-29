import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {},
  },
  extraReducers: (builder) => {},
});
export const { logout } = loginSlice.actions;

export const selectUserLoggedIn = (state) => state.login.isLoggedIn;
export const selectIsLoading = (state) => state.login.status === 'loading';

export default loginSlice.reducer;
