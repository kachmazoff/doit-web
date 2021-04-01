import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { RootState } from "@/store";
import { tryLoadSession } from "./asyncActions";

const mapStateToProps = ({ auth }: RootState) => ({
  status: auth.status,
});

const mapDispatchToProps = {
  tryLoadSession,
};

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  tryLoadSession: Function;
}

const AuthWrapperComponent: FC<Props> = ({
  status,
  children,
  tryLoadSession,
}) => {
  React.useEffect(() => {
    if (status === "init") {
      tryLoadSession();
    } else if (status === "success") {
      // Call api for token validation
    }
  }, [status]);

  return <>{children}</>;
};

export const AuthWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWrapperComponent);
