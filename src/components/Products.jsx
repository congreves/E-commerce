import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { useRecoilState } from "recoil";
import productState from "../store/Products/atom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 55%;
  max-width: 75%;
  z-index: 2;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease &:hover;

&:hover{
    background-color: #e9fce;
    transform: scale(1.1);
  
}

`;

function Products({ item }) {
  const [products, setProducts] = useRecoilState(productState);

  useEffect(() => {
    axios.get("https://k4backend.osuka.dev/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {}, [products]);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} to={`./product/${product.id}`}>
          <Circle />
          <Image src={product.image} />
          <Info>
            <Icon>
              <ShoppingCartCheckoutOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </Product>
      ))}
    </Container>
  );
}

export default Products;
