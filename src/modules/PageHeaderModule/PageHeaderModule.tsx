import React from "react";
import { PageHeader } from "@/components";
import { connect } from "react-redux";
import { RootState } from "@/store";
import { authSlice } from "@/modules/AuthModule";

const mapStateToProps = (rootState: RootState) => ({
  userData: rootState[authSlice.name].userData,
});

type PageHeaderModuleProps = ReturnType<typeof mapStateToProps>;

const PageHeaderComponent = ({ userData }: PageHeaderModuleProps) => {
  return <PageHeader username={userData?.username} />;
};

export const PageHeaderModule = connect(mapStateToProps)(PageHeaderComponent);
