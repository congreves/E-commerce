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
import { authState } from "../../store/auth/atom";
import { useRecoilState, useResetRecoilState } from "recoil";

function Navbar() {
  const { cart } = CreateCartAPI();
  const [totalQty, setTotalQty] = useState(0);
  const [auth, setAuth] = useRecoilState(authState);
  const reset = useResetRecoilState(authState);

  function handleLogged() {
    if(auth.token) {
      reset()
    }
  }

  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      acc = acc + product.qty;
      return acc;
    }, 0);

    setTotalQty(total);
  }, [cart, setTotalQty]);

  console.log(auth);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to={`${
              auth.user && auth.user.role === "admin" ? "/admin" : "none"
            }`}
            style={linkStyle}
          >
            <MenuItem>
              {" "}
              {`${
                auth.user && auth.user.role === "admin" ? "Admin" : ""
              }`}{" "}
            </MenuItem>
          </Link>
          <Link to={`${auth.token ? "/profile" : "/login"}`} style={linkStyle}>
            <MenuItem> {`${auth.token ? "Profile" : "Log In"}`} </MenuItem>
          </Link>
          <Link to={`${auth.token ? "/login" : "/register"}`} style={linkStyle}>
            <MenuItem onClick={handleLogged}> {`${auth.token ? "Log out" : "Create user"}`} </MenuItem>
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

/* <Link to={`${auth.token ? "/profile" : "/login"}`} style={linkStyle}>
            <MenuItem> {`${auth.token ? "Profile" : "Log In"}`} </MenuItem>
          </Link> */
