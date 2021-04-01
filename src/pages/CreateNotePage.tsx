import React, { useState } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { NoteForm } from "@/forms";
import { Participant } from "@/types";

export const CreateNotePage = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const endpoint = `/api/users/${user.username}/participants`;

    axios.get(endpoint).then((x) => {
      setParticipants(x.data);
    });
  }, []);

  const onSubmit = React.useCallback((formData) => {
    const endpoint = `/api/participants/${formData.participant_id}/notes`;

    axios.post(endpoint, formData).then((x) => {
      console.log(x.data);
    });
  }, []);

  return (
    <>
      <Col>
        <NoteForm participants={participants} onSubmit={onSubmit} />
      </Col>
      <Col xs={3} className="hidden-sm-down" />
    </>
  );
};
