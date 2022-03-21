import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dbe6e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #ffff;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: 1px solid #b7ccc0;
  padding: 15px 20px;

  background-color: #b7ccc0;
  color: #ffff;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ffff;
    color: #b7ccc0;
  }
`;

function Register() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Lastname" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            {" "}
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
