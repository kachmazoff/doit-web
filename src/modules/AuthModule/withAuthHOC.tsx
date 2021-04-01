import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthStatus } from "./selectors";

export const withAuth = <Props extends object>(
  Component: React.ComponentType<Props>,
  redirectPath = "/login",
  onlyUnauthorized = false
) => {
  const WithAuth = (props: Props) => {
    const authStatus = useSelector(getAuthStatus);

    if (authStatus === "init" || authStatus === "loading") {
      return <div>Checking if user is authorized</div>;
    }

    if (
      (authStatus === "failed" && !onlyUnauthorized) ||
      (authStatus === "success" && onlyUnauthorized)
    ) {
      return <Redirect to={redirectPath} />;
    }

    return <Component {...props} />;
  };

  WithAuth.displayName = `withAuth(${Component.displayName})`;

  return WithAuth;
};
