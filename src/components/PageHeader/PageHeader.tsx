import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Actions } from "./components";
import styles from "./pageHeader.module.css";

export const PageHeader = ({ username, onLogout }) => {
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
            {!!username && (
              <div className={styles.authContainer}>
                <span className={styles.username}>@{username}</span>
                <Actions
                  onSelect={(eventKey) => {
                    if (eventKey === "logout") {
                      onLogout();
                    }
                  }}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};
