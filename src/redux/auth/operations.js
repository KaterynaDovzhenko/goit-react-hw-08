import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../contacts/operations";
import axios from "axios";

const setAuthHeader = (value) => {
  return (axios.defaults.headers.common.Authorization = value);
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      console.log(credentials);

      setAuthHeader(`Bearer ${response.data.token}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);

      setAuthHeader(`Bearer ${response.data.token}`);
      thunkAPI.dispatch(fetchContacts());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("users/logout");
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();

      setAuthHeader(`Bearer ${reduxState.auth.token}`);

      //   localStorage.setItem("token", response.data.token);

      const response = await axios.get("/users/me");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
