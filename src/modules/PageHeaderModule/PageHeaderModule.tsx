import React from "react";
import { connect } from "react-redux";
import { authSlice, logoutAction } from "@/modules/AuthModule";
import { PageHeader } from "@/components";
import { RootState } from "@/store";

const mapStateToProps = (rootState: RootState) => ({
  userData: rootState[authSlice.name].userData,
});

const mapDispatchToProps = {
  logoutAction,
};

type PageHeaderModuleProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const PageHeaderComponent = ({
  userData,
  logoutAction,
}: PageHeaderModuleProps) => {
  return (
    <PageHeader
      username={userData?.username}
      onLogout={() => {
        logoutAction();
        document.location = "/";
      }}
    />
  );
};

export const PageHeaderModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeaderComponent);
