import axios from "axios";
import { actions, IAuthUserData, AuthStatus } from "./slice";
import { login } from "./utils";

// TODO: переделать (localStorage / sessionStorage в зависимости от 'запимнить'/'нет' на форме авторизации)

export const tryLoadSession = () => (dispatch: Function) => {
  const { setStatus, setAuthData } = actions;

  const token = localStorage.getItem("token");
  const user: null | string = localStorage.getItem("user");

  if (token !== null && user !== null) {
    const userData: IAuthUserData = JSON.parse(user);
    login({ token, userData, needSave: false });
    dispatch(setAuthData({ userData }));

    return Promise.resolve<AuthStatus>("success");
  } else {
    dispatch(setStatus("failed"));
    return Promise.resolve<AuthStatus>("failed");
  }
};

export const loginAction = ({ email, password }) => (dispatch: Function) => {
  const { setAuthData, setStatus } = actions;

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
      dispatch(setStatus("failed"));
    });
};
