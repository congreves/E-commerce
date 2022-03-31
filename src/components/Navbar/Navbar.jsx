import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Center,
  Right,
  MenuItem,
  linkStyle

} from "./Navbar.styles";


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/register" style={linkStyle}>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
            <MenuItem>Log In</MenuItem>
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
