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
import { useRecoilValue } from "recoil";
import productState from "../../store/Products/atom";
import Total from "../../components/Cart/Total";
import { CreateCartAPI } from "../../store/Cart/atom";

function Cart() {
  const products = useRecoilValue(productState);
  const { cart, increaseQty, reduceQty, removeFromCart } = CreateCartAPI();

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
            {cart.map(({ id, qty }) => {
              const product = products.find((p) => p.id === id);

              if (!product) {
                console.warn(`pages/Cart: Didn't find product with ID ${id}`);
                return null;
              }

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
                        onClick={() => removeFromCart(products.id)}
                      />
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add  onClick={() => increaseQty(id)} />
                      <ProductAmount>1</ProductAmount>
                      <Remove onClick={() => reduceQty(id)}/>
                    </ProductAmountContainer>
                    <ProductPrice> $ {product.price} </ProductPrice>
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
