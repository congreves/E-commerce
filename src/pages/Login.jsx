import React from 'react'
import styled from "styled-components";
import {mobile} from "../responsive";


const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #dbe6e0;
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: #ffff;
${mobile({ width: "75%" })}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-direction:column;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;

`
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

`
const Link = styled.a`
margin: 5px 0px;
font-size: 14px;
text-decoration: underline;
cursor:pointer;
`

function Login() {
  return (
    <Container>
    <Wrapper>
        <Title>
           Sign In
        </Title>
        <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
          <Button>Log In</Button>
          <Link>Forgot your password?</Link>
          <Link>Create A New Account</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login