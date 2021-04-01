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
  const [localStatus, setLocalStatus] = React.useState(status);

  React.useEffect(() => {
    if (status === "init") {
      setLocalStatus("loading");
      tryLoadSession();
    } else if (status === "success") {
      // Call api for token validation
    }

    if (status === "failed" || status === "success") {
      setLocalStatus(status);
    }
  }, [status]);

  if (localStatus === "init" || localStatus === "loading") {
    return <p>Загрузка</p>;
  }

  return <>{children}</>;
};

export const AuthWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWrapperComponent);
