import React, { useState } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { NoteForm } from "@/forms";
import { Participant } from "@/types";

export const CreateNotePage = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const endpoint = `/api/users/${user.username}/participants`;
    const headers = {};
    if (!!token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    axios.get(endpoint, { headers }).then((x) => {
      setParticipants(x.data);
      console.log(x.data);
    });
  }, []);

  const onSubmit = React.useCallback((formData) => {
    console.log(formData);

    const token = localStorage.getItem("token");

    const endpoint = `/api/participants/${formData.participant_id}/notes`;
    const headers = {};
    if (!!token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    axios.post(endpoint, formData, { headers }).then((x) => {
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
