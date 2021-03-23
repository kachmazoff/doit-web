import React from "react";
import { Col, Form } from "react-bootstrap";
import { Block, Button } from "@/components";

// TODO: use Formik (https://react-bootstrap.github.io/components/forms/#forms-validation-libraries)

const labelStyles = { margin: 0 };

export const ChallengeForm = () => {
  return (
    <>
      <h2 style={{ marginTop: "1rem" }}>Создание челленджа</h2>
      <Form>
        <h4 style={{ marginTop: "1rem" }}>Общая информация</h4>
        <Block style={{ padding: "6px 16px" }}>
          <Form.Row className="mb-3 mt-1">
            <Col>
              <Form.Label style={labelStyles}>Название</Form.Label>
              <Form.Control
                id="title"
                placeholder="Кругосветное путешествие за 80 дней"
                type="text"
                name="title"
                required
              />
            </Col>
          </Form.Row>

          <Form.Row className="mb-3">
            <Col>
              <Form.Label style={labelStyles}>Описание</Form.Label>
              <Form.Control
                id="description"
                placeholder="Придумайте описание вашего челленджа, чтоб другие пользователи могли понять, в чём его суть"
                type="text"
                name="description"
                required
                as="textarea"
                style={{ minHeight: "150px", resize: "none" }}
              />
            </Col>
          </Form.Row>
        </Block>

        <h4 style={{ marginTop: "1rem" }}>Настройки</h4>
        <Block style={{ padding: "6px 16px" }}>
          <Form.Group className="mb-3 mt-1">
            <Form.Row>
              <Col xs={5}>
                <Form.Label style={labelStyles}>Уровень видимости</Form.Label>
                <Form.Control
                  as="select"
                  name="visibilityType"
                  defaultValue="solo"
                >
                  <option value="public">Открытый</option>
                  <option value="private">Приватный</option>
                </Form.Control>
              </Col>
            </Form.Row>
            <Form.Text muted>
              Кто сможет увидеть/найти данный челлендж в поиске/на вашей
              страничке. При приватном уровне видимости другие пользователи не
              смогут видеть ваш дневник
            </Form.Text>
          </Form.Group>

          <Form.Row className="mb-3">
            <Col xs={5}>
              <Form.Label style={labelStyles}>Тип исполнителей</Form.Label>
              <Form.Control
                as="select"
                name="participantsType"
                defaultValue="solo"
              >
                <option value="solo">Одиночки</option>
                {/* <option value="team">Команды</option> */}
                {/* <option value="any">Одиночки/Команды</option> */}
              </Form.Control>
            </Col>
          </Form.Row>

          <Form.Row className="mb-3">
            <Col xs={5}>
              <Form.Label style={labelStyles}>Доступ к выполнению</Form.Label>
              <Form.Control as="select" name="accessType" defaultValue="open">
                <option value="open">Открыт всем</option>
                <option value="close">Открыт только для меня</option>
              </Form.Control>
            </Col>
          </Form.Row>

          <Form.Group className="mb-3" controlId="hideAuthor">
            <Form.Check
              type="checkbox"
              name="hideAuthor"
              label="Скрывать автора"
            />
          </Form.Group>
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
