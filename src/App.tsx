import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Block, Menu, PageHeader } from "./components";
import {
  CreateChallengePage,
  CreateNotePage,
  HomePage,
  RegistrationPage,
  NotFoundPage,
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
              <Route path="/note_create" exact component={CreateNotePage} />
              <Route path="/" exact component={HomePage} />
              <Route path="*" exact component={NotFoundPage} />
            </Switch>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};
