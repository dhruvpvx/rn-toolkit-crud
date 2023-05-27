import { createSlice } from '@reduxjs/toolkit';
import AsyncThunks from '../AsyncThunks';

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: {
    users: [],
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AsyncThunks.getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(AsyncThunks.deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== +action.meta.arg
        );
      });
  },
});

export default UsersSlice.reducer;
