import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { Block, Button } from "@/components";

// TODO: use Formik (https://react-bootstrap.github.io/components/forms/#forms-validation-libraries)

const labelStyles = { margin: 0, fontSize: "14px", opacity: "0.5" };

interface LoginFormMinProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const LoginFormMin = ({ onSubmit }: LoginFormMinProps) => {
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
          <Col>
            <Form.Label htmlFor="email" style={labelStyles}>
              Email
            </Form.Label>
            <InputGroup size="sm">
              <FormControl
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </InputGroup>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Label htmlFor="password" style={labelStyles}>
              Пароль
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="password"
              placeholder="password"
              type="password"
              required
              size="sm"
            />
          </Col>
        </Form.Row>

        <Form.Row className="align-items-center">
          <Col>
            <Button
              type="submit"
              className="mt-2 mb-2"
              style={{ padding: "4px", width: "100%" }}
            >
              Войти
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Block>
  );
};
