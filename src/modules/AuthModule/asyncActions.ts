import { actions, IAuthUserData, AuthStatus } from "./slice";

// TODO: переделать (localStorage / sessionStorage в зависимости от 'запимнить'/'нет' на форме авторизации)

export const tryLoadSession = () => (dispatch: Function) => {
  const { setStatus, setAuthData } = actions;

  const token = localStorage.getItem("token");
  const user: null | string = localStorage.getItem("user");

  if (token !== null && user !== null) {
    const userData: IAuthUserData = JSON.parse(user);

    dispatch(setAuthData({ userData }));

    return Promise.resolve<AuthStatus>("success");
  } else {
    dispatch(setStatus("failed"));
    return Promise.resolve<AuthStatus>("failed");
  }
};
