import { MailOutlined } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
margin: 20px;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 200;
margin-botto,: 20px;
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;

`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
background-color: #b7ccc0;
padding: 10px;
border: none;
color: white;
`


function Newsletter() {
  return (
 <Container>
     <Title>
Newsletter
     </Title>
     <Desc>
         Get timely updates from your favorite products.
     </Desc>
         <InputContainer>
         <Input placeholder="Your email"/>
         <Button><MailOutlined/></Button>
         </InputContainer>
   
 </Container>
  )
}

export default Newsletter