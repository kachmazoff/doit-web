import { axiosConfig } from "@/api";

export const login = ({
  token,
  userData,
  needSave = true,
}: {
  token: string;
  userData: object;
  needSave?: boolean;
}) => {
  if (needSave) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  axiosConfig.setAuthHeader(token);
  axiosConfig.setErrorInterceptor();
};

export const logout = () => {
  axiosConfig.clearAuthHeader();
  axiosConfig.clearErrorInterceptor();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
