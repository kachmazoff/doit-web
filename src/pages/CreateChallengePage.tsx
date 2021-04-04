import React from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { ChallengeForm } from "@/forms/ChallengeForm";

export const CreateChallengePage = () => {
  const onSubmit = React.useCallback((formData) => {
    const endpoint = `/api/challenges`;

    axios.post(endpoint, formData).then((x) => {
      history.back();
    });
  }, []);

  return (
    <>
      <Col>
        <ChallengeForm onSubmit={onSubmit} />
      </Col>
      <Col xs={3} />
    </>
  );
};
