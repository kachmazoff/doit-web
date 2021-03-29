import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Block, Menu, PageHeader } from "./components";
import {
  CreateChallengePage,
  CreateNotePage,
  HomePage,
  RegistrationPage,
  NotFoundPage,
  ChallengePage,
} from "./pages";

export const App = () => {
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    setUsername(user?.username);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <PageHeader username={username} />
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
              <Route path="/challenge/:id" exact component={ChallengePage} />
              <Route path="/note_create" exact component={CreateNotePage} />
              <Route path="/feed" component={HomePage} />
              <Route path="/" exact>
                <Redirect to="/feed" />
              </Route>
              <Route path="*" exact component={NotFoundPage} />
            </Switch>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};
