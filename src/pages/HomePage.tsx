import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import { Col } from "react-bootstrap";
import { LoginFormMin } from "@/forms";
import { FastActionsBlock, Block, TabNav } from "@/components";
import { TimelineModule } from "@/modules";
import { loginAction } from "@/modules/AuthModule";

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
  const dispatch = useDispatch();

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
              const email = data.target.elements.email.value;
              const password = data.target.elements.password.value;

              dispatch(loginAction({ email, password }));
            }}
          />
        )}
        <FastActionsBlock />
      </Col>
    </>
  );
};
