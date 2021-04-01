import React from "react";
import axios from "axios";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { LoginFormMin } from "@/forms";
import { FastActionsBlock, Block, TabNav } from "@/components";
import { TimelineModule } from "@/modules";
import { axiosConfig } from "@/api";

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const createTabsConfig = (url) => {
  return [
    {
      url: `${url}`,
      name: "Подписки",
      exact: true,
    },
    {
      url: `${url}/own`,
      name: "Мои записи",
    },
  ];
};

export const HomePage = () => {
  const { path, url } = useRouteMatch();
  const [tabsConfig, setTabsConfig] = React.useState([]);

  React.useEffect(() => {
    setTabsConfig(createTabsConfig(url));
  }, [url]);

  const isLoggedIn = localStorage.getItem("user") !== null;

  return (
    <>
      <Col>
        <Block style={{ padding: "0.5rem 1rem" }}>
          <TabNav config={tabsConfig} />
          {/* TODO: Add icon https://fontawesome.com/icons/filter?style=solid */}
        </Block>
        <Switch>
          <Route path={`${path}/own`}>
            <TimelineModule type="own" />
          </Route>
          <Route path={path} exact>
            <TimelineModule type="personalized" />
          </Route>
          <Route path="*" exact>
            <Redirect to={path} />
          </Route>
        </Switch>
      </Col>
      <Col xs={3}>
        {!isLoggedIn && (
          <LoginFormMin
            onSubmit={(data) => {
              const { email, password } = data.target.elements;
              const body = { email: email.value, password: password.value };

              axios.post("/api/auth/login", body).then((x) => {
                axiosConfig.setAuthHeader(x.data.token);
                console.log(x.data);
                localStorage.setItem("token", x.data.token);
                localStorage.setItem("user", JSON.stringify(x.data.user));
                document.location.reload();
              });
            }}
          />
        )}

        <FastActionsBlock />
      </Col>
    </>
  );
};
