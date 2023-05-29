import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectIsLoading = (state) => state.dashboard.status === 'loading';

export default dashboardSlice.reducer;
