import React from "react";
import { Col } from "react-bootstrap";
import { Timeline, FastActionsBlock, TimelineItemModel } from "@/components";

const timelineMock = [
  { id: "woegrvjip", type: "CREATE_CHALLENGE" },
  { id: "woegrvjipeowuhijpfo", type: "ACCEPT_CHALLENGE" },
  { id: "woegrvjipuiwhdjbo", type: "CREATE_CHALLENGE" },
  { id: "woegrvjip1", type: "CREATE_CHALLENGE" },
  { id: "woegrvjipeowuhijpfo1", type: "ACCEPT_CHALLENGE" },
  { id: "woegrvjipuiwhdjbo1", type: "CREATE_CHALLENGE" },
  { id: "woegrvjip2", type: "CREATE_CHALLENGE" },
  { id: "woegrvjipeowuhijpfo2", type: "ACCEPT_CHALLENGE" },
  { id: "woegrvjipuiwhdjbo2", type: "CREATE_CHALLENGE" },
];

export const HomePage = () => (
  <>
    <Col>
      <Timeline items={timelineMock as TimelineItemModel[]} />
    </Col>
    <Col xs={3}>
      <FastActionsBlock />
    </Col>
  </>
);
