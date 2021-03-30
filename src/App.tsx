import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Block, Menu, PageHeader } from "./components";
import { AppRoutes } from "./pages";

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
            <AppRoutes />
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};
