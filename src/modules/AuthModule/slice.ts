import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthStatus = "init" | "loading" | "success" | "failed";

export interface IAuthUserData {
  id: string;
  username: string;
}

export interface AuthData {
  userData: IAuthUserData;
}

type AuthState = Partial<AuthData> & { status: AuthStatus };

const initialState: AuthState = {
  status: "init",
  userData: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<AuthStatus>) => ({
      ...state,
      status: payload,
    }),
    setAuthData: (state, { payload }: PayloadAction<AuthData>) => ({
      ...state,
      status: "success",
      userData: payload.userData,
    }),
    clearAuthData: (state) => ({
      ...state,
      status: "failed",
      userData: undefined,
    }),
  },
});

export const { actions } = authSlice;
