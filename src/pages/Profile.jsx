import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../store/auth/atom";
import styled from "styled-components";
import ProfileCard from "../components/Profile/ProfileCard";

const Container = styled.div`
  background-color: #ffff;
`;

function Profile() {
  return (
    <Container>
      <Navbar />

      <ProfileCard />

      <Footer />
    </Container>
  );
}

export default Profile;
