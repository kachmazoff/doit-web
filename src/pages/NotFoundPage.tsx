import React from "react";
import { Col } from "react-bootstrap";

export const NotFoundPage = () => (
  <>
    <Col>
      <div
        style={{
          textAlign: "center",
          marginTop: "20vh",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>404 Page</h1>
      </div>
    </Col>
    <Col xs={3} className="hidden-sm-down" />
  </>
);
