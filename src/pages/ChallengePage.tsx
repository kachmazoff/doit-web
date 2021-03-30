import React from "react";
import { Col, Tabs, Tab } from "react-bootstrap";
import { Block } from "@/components";

export const ChallengePage = (props) => (
  <>
    <Col>
      <div>
        <Block style={{ padding: "8px 16px" }}>
          <span style={{ opacity: "0.5", fontSize: "14px" }}>Челлендж</span>
          <h3>Сдохни или умри</h3>
          <span style={{ opacity: "0.5", fontSize: "14px" }}>Описание</span>
          <p style={{ fontSize: "14px" }}>
            Равным образом постоянный количественный рост и сфера нашей
            активности позволяет выполнять важные задания по разработке модели
            развития. Товарищи! укрепление и развитие структуры играет важную
            роль в формировании системы обучения кадров, соответствует насущным
            потребностям.
          </p>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="home" title="События">
              Home tab
            </Tab>
            <Tab eventKey="profile" title="Участники">
              Profile tab
            </Tab>
          </Tabs>
        </Block>
      </div>
    </Col>
    <Col xs={3} className="hidden-sm-down" />
  </>
);
