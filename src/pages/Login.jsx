import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: #FFFFF;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dbe7dc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "75%" })}
`;

const LoginBox = styled.div`
  padding: 20px;
  width: 40%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: 1px solid #b7ccc0;
  padding: 15px 20px;
  margin: 10px 0px;
  background-color: #b7ccc0;
  color: #ffff;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #ffff;
    color: #b7ccc0;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <Navbar />
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
      <Footer />
    </Container>
  );
}

export default Login;
