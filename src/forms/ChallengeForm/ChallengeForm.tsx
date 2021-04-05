import React from "react";
import { Col, Form } from "react-bootstrap";
import { Block, Button } from "@/components";

// TODO: use Formik (https://react-bootstrap.github.io/components/forms/#forms-validation-libraries)

const labelStyles = { margin: 0 };
const fields = [
  "body",
  "hideAuthor",
  "participants_type",
  "title",
  "visible_type",
];

export const ChallengeForm = ({ onSubmit }: { onSubmit: Function }) => {
  const onSubmitHandler = React.useCallback(
    (event) => {
      event.preventDefault();
      const { elements } = event.target;

      const data: { [key: string]: string } = {};
      fields.forEach((x) => {
        if (x === "hideAuthor") {
          data["show_author"] = !elements[x].checked;
          return;
        }
        data[x] = elements[x].value;
      });

      onSubmit(data);
    },
    [onSubmit]
  );

  return (
    <>
      <h2 style={{ marginTop: "1rem" }}>Создание челленджа</h2>
      <Form onSubmit={onSubmitHandler}>
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
                id="body"
                placeholder="Придумайте описание вашего челленджа, чтоб другие пользователи могли понять, в чём его суть"
                type="text"
                name="body"
                required
                as="textarea"
                style={{ minHeight: "150px", resize: "none" }}
              />
            </Col>
          </Form.Row>
        </Block>

        <h4 style={{ marginTop: "1rem" }}>Настройки приватности</h4>
        <Block style={{ padding: "6px 16px" }}>
          <Form.Group className="mb-3 mt-1">
            <Form.Row>
              <Col xs={5}>
                <Form.Label style={labelStyles}>Уровень видимости</Form.Label>
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
              страничке. При приватном уровне видимости другие пользователи не
              смогут видеть ваш дневник
            </Form.Text>
          </Form.Group>

          <Form.Row className="mb-3">
            <Col xs={5}>
              <Form.Label style={labelStyles}>Тип исполнителей</Form.Label>
              <Form.Control
                as="select"
                name="participants_type"
                defaultValue="solo"
              >
                <option value="solo">Одиночки</option>
                {/* <option value="team">Команды</option> */}
                {/* <option value="any">Одиночки/Команды</option> */}
              </Form.Control>
            </Col>
          </Form.Row>

          {/* <Form.Row className="mb-3">
            <Col xs={5}>
              <Form.Label style={labelStyles}>Доступ к выполнению</Form.Label>
              <Form.Control as="select" name="accessType" defaultValue="open">
                <option value="open">Открыт всем</option>
                <option value="close">Открыт только для меня</option>
              </Form.Control>
            </Col>
          </Form.Row> */}

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
