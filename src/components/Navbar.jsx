import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60px;
  margin: 30px  0px;
  ${mobile({ height: "50px" })}
 
`;
const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;



const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 36px;
  ${mobile({ fontSize: "20px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "space-between" })}
  
`;

const MenuItem = styled.div`
font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "14px", marginLeft: "15px"})}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
         
        </Left>
        <Center>
          <Logo>Sonrisa.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
          <MenuItem></MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
