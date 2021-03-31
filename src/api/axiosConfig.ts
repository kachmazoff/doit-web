import axios from "axios";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = undefined;
};

let commonErrorInterceptor: number | undefined = undefined;

const setErrorInterceptor = () => {
  if (commonErrorInterceptor === undefined) {
    clearErrorInterceptor();
  }
  commonErrorInterceptor = axios.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {
      clearAuthHeader();
    }

    return Promise.reject(error);
  });
};

const clearErrorInterceptor = () => {
  axios.interceptors.request.eject(commonErrorInterceptor);
};

export {
  setAuthHeader,
  clearAuthHeader,
  setErrorInterceptor,
  clearErrorInterceptor,
};
