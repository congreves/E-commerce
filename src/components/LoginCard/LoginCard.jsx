import {
  Wrapper,
  LoginBox,
  Title,
  Form,
  Input,
  Button,
  linkStyle,
} from "./LoginCard.styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginCard(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <LoginBox>
        <Title>Log In</Title>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={() => props.login(username, password)}>
            Log In
          </Button>
          <Link to="/register" style={linkStyle}>Forgot your password?</Link>
          <Link to="/register" style={linkStyle}>
            Create a new account
          </Link>
        </Form>
      </LoginBox>
    </Wrapper>
  );
}

export default LoginCard;
