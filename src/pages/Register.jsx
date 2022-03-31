import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import RegisterCard from "../components/RegisterCard/RegisterCard";

const Container = styled.div`
  background-color: #ffff;
`;

function Register() {
  return (
    <Container>
      <Navbar />
      <RegisterCard />
      <Footer />
    </Container>
  );
}

export default Register;
