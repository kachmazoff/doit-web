import React from "react";
import { Col } from "react-bootstrap";
import { NoteForm } from "@/forms";

export const CreateNotePage = () => (
  <>
    <Col>
      <NoteForm />
    </Col>
    <Col xs={3} className="hidden-sm-down" />
  </>
);
