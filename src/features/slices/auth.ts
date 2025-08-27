import { createSlice } from "@reduxjs/toolkit";

export type authStateType = {
  id: string;
  email: string;
  isAuthenticated: boolean;
};

const initialState: authStateType = {
  id: "",
  email: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set_auth: (state, action) => {
      Object.assign(state, action.payload);
    },
    clear_auth: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { set_auth, clear_auth } = authSlice.actions;

export default authSlice.reducer;
