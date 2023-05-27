import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../../api';

const getUsers = createAsyncThunk(
  'UsersSlice/getUsers',
  async (payload, thunkAPI) => {
    try {
      const response = await ApiManager.getUsers();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getUser = createAsyncThunk(
  'UsersSlice/getUser',
  async (payload, thunkAPI) => {
    try {
      const response = await ApiManager.getUser(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const addUser = createAsyncThunk(
  'UsersSlice/addUser',
  async (payload, thunkAPI) => {
    try {
      const response = await ApiManager.addUser(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const editUser = createAsyncThunk(
  'UsersSlice/editUser',
  async (payload, thunkAPI) => {
    try {
      const response = await ApiManager.editUser(payload.id, payload.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const deleteUser = createAsyncThunk(
  'UsersSlice/deleteUser',
  async (payload, thunkAPI) => {
    try {
      const response = await ApiManager.deleteUser(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default {
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
};
