import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
};

export const shocaseSlice = createSlice({
  name: 'shocase',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectIsLoading = (state) => state.shocase.status === 'loading';

export default shocaseSlice.reducer;
