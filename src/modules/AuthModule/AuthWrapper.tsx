import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { RootState } from "@/store";
import { StatusMessage } from "@/components";
import { checkAuth, tryLoadSession } from "./asyncActions";
import { actions } from "./slice";

const mapStateToProps = ({ auth }: RootState) => ({
  status: auth.status,
});

const mapDispatchToProps = {
  tryLoadSession,
  checkAuth,
  setAuthStatus: actions.setStatus,
};

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  tryLoadSession: Function;
  checkAuth: Function;
  setAuthStatus: Function;
}

const AuthWrapperComponent: FC<Props> = ({
  status,
  children,
  tryLoadSession,
}) => {
  React.useEffect(() => {
    if (status === "init") {
      tryLoadSession();
    }
  }, [status]);

  if (status === "init" || status === "loading") {
    return <StatusMessage status="loading" />;
  }

  return <>{children}</>;
};

export const AuthWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWrapperComponent);
