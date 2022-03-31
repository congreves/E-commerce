import {
  Wrapper,
  LoginBox,
  Title,
  Form,
  Input,
  Button,
  Link,
} from "./LoginCard.styles";
import React from "react";

function LoginCard() {
  return (
    <Wrapper>
    <LoginBox>
      <Title>Sign In</Title>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button>Log In</Button>
        <Link>Forgot your password?</Link>
        <Link>Create A New Account</Link>
      </Form>
    </LoginBox>
    </Wrapper>
  );
}

export default LoginCard;
