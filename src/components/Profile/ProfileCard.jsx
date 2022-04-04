import axios from "axios";
import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authState } from "../../store/auth/atom";
import {
  Wrapper,
  ProfileBox,
  Title,
  UserInfo,
  UserName,
  Button,
} from "./ProfileCard.styles";

function ProfileCard() {
  const { user } = useRecoilValue(authState);


  
const reset = useResetRecoilState(authState);

  if(!user) {
    return <div>Not yet signed in..</div>
  } 
  console.log(user);


  return (
    <Wrapper>
    <ProfileBox>
      <Title>My Account</Title>
      <UserInfo>
        <UserName>{user.name.firstname}</UserName>
        <UserName>{user.name.lastname}</UserName>
        <UserName>{user.username}</UserName>
        <UserName>{user.password}</UserName>
      </UserInfo>
      <Button onClick={reset}>Log out</Button>
    </ProfileBox>
    </Wrapper>
  );
}

export default ProfileCard;
