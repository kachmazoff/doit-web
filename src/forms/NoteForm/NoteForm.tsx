import React from "react";
import { Col, Form } from "react-bootstrap";
import { Block, Button } from "@/components";

const labelStyles = { margin: 0 };

export const NoteForm = () => {
  return (
    <>
      <h2 style={{ marginTop: "1rem" }}>Создание заметки</h2>
      <Form>
        <Block style={{ padding: "6px 16px" }}>
          <Form.Row className="mb-3 mt-1">
            <Col xs={12}>
              <Form.Label style={labelStyles}>Челлендж</Form.Label>
              <Form.Control
                as="select"
                name="participant_id"
                defaultValue="init"
              >
                <option value="init" disabled hidden>
                  Выберите
                </option>
                <option value="open">Сдохни или умри</option>
                <option value="close">Разработка приложения doit</option>
              </Form.Control>
            </Col>
          </Form.Row>

          <Form.Row className="mb-3">
            <Col xs={5}>
              <Form.Label style={labelStyles}>Тип записи</Form.Label>
              <Form.Control
                as="select"
                name="participantsType"
                defaultValue="solo"
              >
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
                id="description"
                placeholder="Ваша заметка"
                type="text"
                name="description"
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
