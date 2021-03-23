import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { Block, Button } from "@/components";

// TODO: use Formik (https://react-bootstrap.github.io/components/forms/#forms-validation-libraries)

const labelStyles = { margin: 0 };

interface LoginFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const onSubmitHandler = React.useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!!onSubmit) {
        onSubmit(event);
      }
    },
    [onSubmit]
  );

  return (
    <Block style={{ padding: "6px 16px" }}>
      <Form onSubmit={onSubmitHandler}>
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
            </InputGroup>
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

        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Button
              type="submit"
              className="mt-2 mb-2"
              style={{ padding: "6px 24px" }}
            >
              Войти
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Block>
  );
};
