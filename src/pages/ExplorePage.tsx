import React from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { TimelineModule } from "@/modules";
import { getIsAuthenticated } from "@/modules/AuthModule";
import { FastActionsBlock } from "@/components";

export const ExplorePage = () => {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <>
      <Col>
        <TimelineModule type="common" />
      </Col>
      <Col xs={3}>{isLoggedIn && <FastActionsBlock />}</Col>
    </>
  );
};
