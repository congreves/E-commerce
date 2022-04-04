import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Center,
  Right,
  MenuItem,
  linkStyle,
} from "./Navbar.styles";
import { CreateCartAPI } from "../../store/Cart/atom";

function Navbar() {
  const { cart } = CreateCartAPI();
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      acc = acc + product.qty;
      return acc;
    }, 0);

    setTotalQty(total);
  }, [cart, setTotalQty]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/profile" style={linkStyle}>
            <MenuItem>Profile</MenuItem>
          </Link>
          <Link to="/admin" style={linkStyle}>
          <MenuItem>Admin</MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
            <MenuItem>Log In</MenuItem>
          </Link >
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
              <Badge badgeContent={totalQty} color="primary">
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
