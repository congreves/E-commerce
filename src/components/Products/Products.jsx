import React, { useEffect } from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { useRecoilState } from "recoil";
import productState from "../../store/Products/atom";
import axios from "axios";
import { Container, Info, Product, Circle, Image, Icon,} from "./Products.styles"



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
