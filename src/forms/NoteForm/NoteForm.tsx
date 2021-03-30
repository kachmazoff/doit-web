import React from "react";
import { Col, Form } from "react-bootstrap";
import { Block, Button } from "@/components";
import { Participant } from "@/types";

const labelStyles = { margin: 0 };

const fields = ["participant_id", "type", "body"];

export const NoteForm = ({
  participants = [],
  onSubmit,
}: {
  participants: Participant[];
  onSubmit: Function;
}) => {
  const onSubmitHandler = React.useCallback(
    (event) => {
      event.preventDefault();
      const { elements } = event.target;
      if (elements.participant_id.value === "init") {
        return;
      }

      const data: { [key: string]: string } = {};
      fields.forEach((x) => (data[x] = elements[x].value));

      onSubmit(data);
    },
    [onSubmit]
  );

  return (
    <>
      <h2 style={{ marginTop: "1rem" }}>Создание заметки</h2>
      <Form onSubmit={onSubmitHandler}>
        <Block style={{ padding: "6px 16px" }}>
          <Form.Row className="mb-3 mt-1">
            <Col xs={12}>
              <Form.Label style={labelStyles}>Дневник</Form.Label>
              <Form.Control
                as="select"
                name="participant_id"
                defaultValue="init"
              >
                <option value="init" disabled hidden>
                  Выберите
                </option>
                {participants.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.challenge?.title || "Что-то пошло не так..."}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Row>

          <Form.Row className="mb-3">
            <Col xs={5}>
              <Form.Label style={labelStyles}>Тип записи</Form.Label>
              <Form.Control as="select" name="type" defaultValue="common">
                <option value="common">Обычная заметка</option>
                <option value="good">Положительная заметка</option>
                <option value="bad">Отрицательная заметка</option>
                <option value="todo" disabled>
                  Задача
                </option>
              </Form.Control>
            </Col>
          </Form.Row>

          <Form.Row className="mb-3">
            <Col>
              <Form.Label style={labelStyles}>Содержание</Form.Label>
              <Form.Control
                id="body"
                placeholder="Ваша заметка"
                type="text"
                name="body"
                required
                as="textarea"
                style={{ minHeight: "150px", resize: "none" }}
              />
            </Col>
          </Form.Row>
        </Block>

        <Button
          type="submit"
          style={{ padding: "6px 24px", marginTop: "1rem" }}
        >
          Создать
        </Button>
      </Form>
    </>
  );
};
