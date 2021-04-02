import React from "react";
import { Col } from "react-bootstrap";
import { TimelineModule } from "@/modules";
import { FastActionsBlock } from "@/components";

export const ExplorePage = () => {
  return (
    <>
      <Col>
        <TimelineModule type="common" />
      </Col>
      <Col xs={3}>
        <FastActionsBlock />
      </Col>
    </>
  );
};
