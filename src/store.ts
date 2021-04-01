import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({ reducer });
