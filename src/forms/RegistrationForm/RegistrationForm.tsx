import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { Block, Button } from "@/components";

// TODO: use Formik (https://react-bootstrap.github.io/components/forms/#forms-validation-libraries)

const labelStyles = { margin: 0 };

interface RegistrationFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const [validated, setValidated] = React.useState(false);

  const onSubmitHandler = React.useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        setValidated(true);
      } else if (!!onSubmit) {
        onSubmit(event);
      }
    },
    [onSubmit]
  );

  return (
    <Block style={{ padding: "6px 16px" }}>
      <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
        <Form.Row className="align-items-center mb-2">
          <Col xs={8}>
            <Form.Label htmlFor="username" style={labelStyles}>
              Username
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="username" placeholder="wampussik" required />
              <Form.Control.Feedback type="invalid">
                Данное имя пользователя уже занято.
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Form.Row>

        <Form.Row className="align-items-center mb-2">
          <Col xs={8}>
            <Form.Label htmlFor="email" style={labelStyles}>
              Email
            </Form.Label>
            <Form.Control
              id="email"
              placeholder="example@gmail.com"
              type="email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Пользователь с данным email уже зарегистрирован.
            </Form.Control.Feedback>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={8}>
            <Form.Label htmlFor="password" style={labelStyles}>
              Пароль
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="password"
              placeholder="password"
              type="password"
              required
            />
          </Col>
        </Form.Row>

        <Form.Row className="mb-2">
          <Col xs={8}>
            <Form.Label htmlFor="password_repeat" style={labelStyles}>
              Повторите пароль
            </Form.Label>
            <Form.Control
              id="password_repeat"
              placeholder="password"
              type="password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Пароли не совпадают.
            </Form.Control.Feedback>
          </Col>
        </Form.Row>

        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Button
              type="submit"
              className="mt-2 mb-2"
              style={{ padding: "6px 24px" }}
            >
              Зарегистрироваться
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Block>
  );
};
