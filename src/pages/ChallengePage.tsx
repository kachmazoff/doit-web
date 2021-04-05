import React from "react";
import { Col, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Block, TabNav, Button } from "@/components";
import { Route, Redirect, Switch, useRouteMatch } from "react-router";
import { ChallengeCard } from "@/components/ChallengeCard";
import axios from "axios";
import { TimelineModule } from "@/modules";
import { getIsAuthenticated } from "@/modules/AuthModule";
import { useSelector } from "react-redux";

const createTabsConfig = (url) => {
  return [
    {
      url: `${url}`,
      name: "События",
      exact: true,
    },
    {
      url: `${url}/participants`,
      name: "Участники",
    },
  ];
};

export const ChallengePage = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = React.useState(undefined);
  const { path, url } = useRouteMatch();
  const isLoggedIn = useSelector(getIsAuthenticated);
  const [tabsConfig, setTabsConfig] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    axios.get(`/api/challenges/${id}`).then((x) => setData(x.data));
  }, [id]);
  React.useEffect(() => {
    setTabsConfig(createTabsConfig(url));
  }, [url]);

  return (
    <>
      <Col>
        {data && <ChallengeCard model={data} />}
        <Block style={{ padding: "0.5rem 1rem" }}>
          <TabNav config={tabsConfig} />
        </Block>
        <Switch>
          <Route path={`${path}/participants`}>Participants</Route>
          <Route path={path} exact>
            {data && <TimelineModule challengeId={id} />}
          </Route>
          <Route path="*" exact>
            <Redirect to={path} />
          </Route>
        </Switch>
      </Col>
      <Col xs={3} className="hidden-sm-down">
        {isLoggedIn && !!data && !data.participant && (
          <Block>
            <Button
              onClick={() => setModalShow(true)}
              style={{ width: "100%", padding: "6px" }}
            >
              Участвовать
            </Button>
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  <FontAwesomeIcon
                    icon={faUnlockAlt}
                    style={{ marginRight: "1rem", color: "#0f98fb" }}
                  />
                  Настройки приватности
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const { elements } = event.target;
                    const data = {
                      visible_type: elements["visible_type"].value,
                      anonymous: elements["anonymous"].checked,
                    };
                    console.log(data);
                    axios
                      .post(`/api/challenges/${id}/participants`, data)
                      .then((x) => location.reload());
                    setModalShow(false);
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Row>
                      <Col xs={5}>
                        <Form.Label>Уровень видимости</Form.Label>
                        <Form.Control
                          as="select"
                          name="visible_type"
                          defaultValue="solo"
                        >
                          <option value="public">Открытый</option>
                          <option value="private">Приватный</option>
                        </Form.Control>
                      </Col>
                    </Form.Row>
                    <Form.Text muted>
                      Кто сможет увидеть/найти данный челлендж в поиске/на вашей
                      страничке. При приватном уровне видимости другие
                      пользователи не смогут видеть ваш дневник
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="anonymous">
                    <Form.Check
                      type="checkbox"
                      name="anonymous"
                      label="Анонимно"
                    />
                  </Form.Group>
                  <Button type="submit" style={{ padding: "6px 24px" }}>
                    Подтвердить
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Block>
        )}
      </Col>
    </>
  );
};
