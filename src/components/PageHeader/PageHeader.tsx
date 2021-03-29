import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "../Button";
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
              <span className={styles.username}>@{username}</span>
            ) : (
              <Button className={styles.singnIn}>Войти</Button>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};
