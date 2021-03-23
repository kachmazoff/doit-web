import React from "react";
import { Col } from "react-bootstrap";
import { FastActionsBlock } from "@/components";
import { ChallengeForm } from "@/forms/ChallengeForm";

export const CreateChallengePage = () => (
  <>
    <Col>
      <ChallengeForm />
    </Col>
    <Col xs={3}>{/* <FastActionsBlock /> */}</Col>
  </>
);
