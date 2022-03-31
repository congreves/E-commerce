import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LoginCard from "../components/LoginCard/LoginCard";
import styled from "styled-components";


const Container = styled.div`
background-color: #FFFFF;
`;

function Login() {
  return (
   <Container>
     <Navbar />
     <LoginCard />
     <Footer />
   </Container>
  );
}

export default Login;
