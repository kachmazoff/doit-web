import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Block, Menu, PageHeader } from "./components";
import { CreateChallengePage, HomePage, RegistrationPage } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <PageHeader />
        <Container fluid="md">
          <Row>
            <Col xs={2}>
              <Block transparent>
                <Menu />
              </Block>
            </Col>
            <Switch>
              <Route path="/registration" exact component={RegistrationPage} />
              <Route
                path="/challenge_create"
                exact
                component={CreateChallengePage}
              />
              <Route path="/" exact component={HomePage} />
            </Switch>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};
