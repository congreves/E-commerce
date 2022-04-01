import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { useRecoilValue } from "recoil";
import productState from "../../store/Products/atom";
import {
  Container,
  Info,
  ProductContainer,
  Circle,
  Image,
  Icon,
} from "./Products.styles";
import { Link } from "react-router-dom";

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
