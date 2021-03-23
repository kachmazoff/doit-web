import React from "react";
import { Col } from "react-bootstrap";
import { FastActionsBlock } from "@/components";
import { RegistrationForm } from "@/forms";

export const RegistrationPage = () => (
  <>
    <Col>
      <h1 style={{ marginTop: "1rem" }}>Регистрация</h1>
      <RegistrationForm />
    </Col>
    <Col xs={3}>
      <FastActionsBlock />
    </Col>
  </>
);
