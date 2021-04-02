import axios from "axios";
import { actions, IAuthUserData, AuthStatus } from "./slice";
import { login, logout } from "./utils";

// TODO: переделать (localStorage / sessionStorage в зависимости от 'запимнить'/'нет' на форме авторизации)

export const tryLoadSession = () => (dispatch: Function) => {
  const { setStatus, setAuthData } = actions;

  dispatch(setStatus("loading"));

  const token = localStorage.getItem("token");
  const user: null | string = localStorage.getItem("user");

  if (token !== null && user !== null) {
    const userData: IAuthUserData = JSON.parse(user);
    login({ token, userData, needSave: false });
    dispatch(checkAuth()).then((x: AuthStatus) => {
      if (x === "success") {
        dispatch(setAuthData({ userData }));
      }
    });

    return Promise.resolve<AuthStatus>("success");
  } else {
    dispatch(setStatus("failed"));
    return Promise.resolve<AuthStatus>("failed");
  }
};

export const loginAction = ({ email, password }) => (dispatch: Function) => {
  const { setAuthData, setStatus, clearAuthData } = actions;

  const body = { email, password };

  dispatch(setStatus("loading"));
  axios
    .post("/api/auth/login", body)
    .then((x) => {
      const { token, user: userData } = x.data;
      login({ token, userData });
      dispatch(setAuthData({ userData }));
    })
    .catch((err) => {
      dispatch(clearAuthData());
    });
};

export const checkAuth = () => (dispatch: Function) => {
  const { clearAuthData } = actions;
  return axios
    .get("/api/auth/check")
    .then((x) => {
      return "success" as AuthStatus;
    })
    .catch((err) => {
      logout();
      dispatch(clearAuthData());
      return "failed" as AuthStatus;
    });
};
