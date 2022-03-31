import { Add, Remove } from "@mui/icons-material";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
} from "./Cart.styles";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useRecoilState } from "recoil";
import productState from "../../store/Products/atom";
import Total from "../../components/Cart/Total";

function Cart() {
  const [products, setProducts] = useRecoilState(productState);

  function handleRemove(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton type="outlined">Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping bag (1)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Check Out Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Hr />
            {products.map((product) => {
              return (
                <Product>
                  <ProductDetail>
                    <Image src={product.image} />
                    <Details>
                      <ProductName>{product.title}</ProductName>
                      <ProductId>{product.id}</ProductId>
                      <ProductColor
                        color="#EED8C0
"
                      />
                      <ProductSize>EU 42</ProductSize>
                      <DeleteOutlineRoundedIcon
                        onClick={() => handleRemove(products.id)}
                      />
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>1</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice> $ 29 </ProductPrice>
                  </PriceDetail>
                </Product>
              );
            })}
          </Info>
        <Total />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
