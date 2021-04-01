import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Actions } from "./components";
import styles from "./pageHeader.module.css";

export const PageHeader = ({ username }) => {
  return (
    <header className={styles.wrapper}>
      <Container fluid="md">
        <Row>
          <Col xs={2}>
            <Link to="/" className={styles.logo}>
              doit
            </Link>
          </Col>
          <Col></Col>
          <Col xs={3} className={styles.right}>
            {!!username ? (
              <div className={styles.authContainer}>
                <span className={styles.username}>@{username}</span>
                <Actions
                  onSelect={(eventKey) => {
                    if (eventKey === "logout") {
                      //logout
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      document.location.reload();
                    }
                  }}
                />
              </div>
            ) : (
              <Button className={styles.singnIn}>Войти</Button>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};
