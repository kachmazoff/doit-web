import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../Button";
import styles from "./pageHeader.module.css";

export const PageHeader = () => {
  return (
    <header className={styles.wrapper}>
      <Container fluid="md">
        <Row>
          <Col xs={2}>
            <span className={styles.logo}>doit</span>
          </Col>
          <Col></Col>
          <Col xs={3} className={styles.right}>
            <span className={styles.username}>@kachmazoff</span>
            <Button className={styles.singnIn}>Войти</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
