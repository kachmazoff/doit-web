import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Block, Menu } from "./components";
import { AppRoutes } from "./pages";
import { store } from "./store";
import { AuthWrapper } from "./modules/AuthModule";
import { PageHeaderModule } from "./modules/PageHeaderModule";

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PageHeaderModule />
      <Container fluid="md">
        <AuthWrapper>
          <Row>
            <Col xs={2}>
              <Block transparent>
                <Menu />
              </Block>
            </Col>
            <AppRoutes />
          </Row>
        </AuthWrapper>
      </Container>
    </BrowserRouter>
  </Provider>
);
