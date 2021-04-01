import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Block, Menu, PageHeader } from "./components";
import { AppRoutes } from "./pages";
import { store } from "./store";
import { AuthWrapper } from "./modules/AuthModule";

export const App = () => {
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    setUsername(user?.username);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthWrapper>
          <PageHeader username={username} />
          <Container fluid="md">
            <Row>
              <Col xs={2}>
                <Block transparent>
                  <Menu />
                </Block>
              </Col>
              <AppRoutes />
            </Row>
          </Container>
        </AuthWrapper>
      </BrowserRouter>
    </Provider>
  );
};
