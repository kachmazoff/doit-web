import React from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { getUserParticipations } from "@/api";
import {
  Block,
  ChallengesList,
  ParticipationsList,
  TabNav,
} from "@/components";
import { getAuthState, getIsAuthenticated } from "@/modules/AuthModule";
import { Redirect, Route, useRouteMatch } from "react-router";
import axios from "axios";
import Switch from "react-bootstrap/esm/Switch";

const createTabsConfig = (url: string, isAuth: boolean) => {
  const res = [
    {
      url: `${url}`,
      name: "Публичные",
      exact: true,
    },
  ];
  if (isAuth) {
    res.push({
      url: `${url}/own`,
      name: "Личные",
      exact: false,
    });
  }
  return res;
};

export const ChallengesListPage = () => {
  const { path, url } = useRouteMatch();
  const isLoggedIn: boolean = useSelector(getIsAuthenticated);
  const [tabsConfig, setTabsConfig] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const [ownChallenges, setOwnChallenges] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/challenges?type=public").then((x) => setChallenges(x.data));
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      axios
        .get("/api/challenges?type=own")
        .then((x) => setOwnChallenges(x.data));
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    setTabsConfig(createTabsConfig(url, isLoggedIn));
  }, [url, isLoggedIn]);

  return (
    <>
      <Col>
        <Block style={{ padding: "0.5rem 1rem" }}>
          <TabNav config={tabsConfig} />
        </Block>
        <Switch style={{ padding: "0" }}>
          <Route path={`${path}/own`}>
            <ChallengesList items={ownChallenges} />
          </Route>
          <Route path={path} exact>
            <ChallengesList items={challenges} />
          </Route>
          <Route path="*" exact>
            <Redirect to={path} />
          </Route>
        </Switch>
      </Col>
      <Col xs={3}></Col>
    </>
  );
};
