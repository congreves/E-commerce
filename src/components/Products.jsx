import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import productState from "../store/products/atom";

function Products() {
  const products = useRecoilValue(productState);

  return (
    <Container>
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductContainer>
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
            </ProductContainer>
          </Link>
        );
      })}
    </Container>
  );
}

export default Products;

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
const ProductContainer = styled.div`
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
