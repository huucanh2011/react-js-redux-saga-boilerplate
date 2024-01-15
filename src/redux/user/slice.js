import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = {
  user: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUserAction: (state) => {
      state.user.isLoading = true;
      state.user.errors = '';
    },
    getUserSuccessAction: (state, { payload: user }) => {
      state.user.isLoading = false;
      state.user.data = user;
    },
    getUserErrorAction: (state, { payload: error }) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
  },
});

export const { getUserAction, getUserSuccessAction, getUserErrorAction } =
  usersSlice.actions;

export default usersSlice.reducer;
