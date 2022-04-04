import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LoginCard from "../components/LoginCard/LoginCard";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import axios from "axios";
import { authState } from "../store/auth/atom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #FFFFF;
`;

function Login() {
  const [auth, setAuth] = useRecoilState(authState);

  const navigate = useNavigate();

  function login(username, password) {
    axios
      .post("https://k4backend.osuka.dev/auth/login", {
        username: username,
        password: password,
      })

      .then((res) => {
        axios.get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
        .then((userData) => {
          setAuth({
            user: userData.data,
            token: res.data.token,
          });
          navigate("/profile");
        })
      
      });
  }

  return (
    <Container>
      <Navbar />
      <LoginCard login={login} />
      <Footer />
    </Container>
  );
}

export default Login;

/* function getUser(response) {
  axios
    .get(`https://k4backend.osuka.dev/users/${response.data.userId}`)
    .then((userData) => {
      setAuth({
        user: userData.data,
        token: response.data.token,
      });
      navigate("/profile");
    });
} */
