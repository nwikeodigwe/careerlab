import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import { authApi } from "./services/auth";
// import historyReducer from "./historySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,

  //   history: historyReducer,
});

export default rootReducer;
