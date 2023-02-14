import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface User {
  admin?: {
    username?: string;
    name?: string;
    _id?: string;
  } | null;
  isLoggedin: boolean;
  Loading: boolean;
  error: boolean;
  errorMessage: string;
}
let storage = localStorage.getItem("user") || null;

const initilValue: User = {
  admin: JSON.parse(
    storage || '{ "_id" :"not_found", "name":"anonymous", "username" : "none"}'
  ),
  isLoggedin: false,
  Loading: false,
  error: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initilValue,
  reducers: {
    Login: (
      state,
      action: PayloadAction<{
        admin?: {
          username?: string;
          name?: string;
          _id?: string;
        };
        isLoggedin: boolean;
        Loading: boolean;
        error: boolean;
        errorMessage: string;
      }>
    ) => {
      state.admin = action.payload.admin;
      state.Loading = action.payload.Loading;
      state.isLoggedin = action.payload.isLoggedin;
      state.error = action.payload.error;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { Login } = userSlice.actions;
export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;
