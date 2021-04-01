import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/modules/AuthModule";

const reducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({ reducer });
