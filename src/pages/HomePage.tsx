import React from "react";
import axios from "axios";
import { Route, Switch, Redirect, useRouteMatch, Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { LoginFormMin } from "@/forms";
import { FastActionsBlock, Block } from "@/components";
import { TimelineModule } from "@/modules";

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const HomePage = () => {
  const { path, url } = useRouteMatch();

  const isLoggedIn = localStorage.getItem("user") !== null;

  return (
    <>
      <Col>
        <Block style={{ padding: "0.5rem 1rem" }}>
          <Link to={`${url}/personalized`}>Подписки</Link>
          <Link to={`${url}/own`}>Мои записи</Link>
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
        {!isLoggedIn ? (
          <LoginFormMin
            onSubmit={(data) => {
              const { email, password } = data.target.elements;
              const body = { email: email.value, password: password.value };

              axios.post("/api/auth/login", body).then((x) => {
                console.log(x.data);
                localStorage.setItem("token", x.data.token);
                localStorage.setItem("user", JSON.stringify(x.data.user));
              });
            }}
          />
        ) : (
          <Block>
            <Button onClick={logout}>Выйти</Button>
          </Block>
        )}
        <FastActionsBlock />
      </Col>
    </>
  );
};
