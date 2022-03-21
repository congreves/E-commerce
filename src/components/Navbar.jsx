import { NoEncryption, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  margin-bottom: 30px;
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
  justify-content: flex-start;
  ${mobile({ display: "none" })}
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
  ${mobile({ fontSize: "14px", marginLeft: "15px" })}
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black'
};

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to="/register" style={linkStyle}>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
            <MenuItem>Sign In</MenuItem>
          </Link>
        </Left>
        <Center>
          <Link to="/" style={linkStyle}>
            <Logo>Sonrisa.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/productlist" style={linkStyle}>
            <MenuItem>All Products</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart" style={linkStyle}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
