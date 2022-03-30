import { Add, Remove } from "@mui/icons-material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useRecoilState } from "recoil";
import productState from "../store/Products/atom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: 54px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  padding: 15px 20px;
  border: ${(props) =>
    props.type === "filled" ? "none" : " 1px solid #b7ccc0"};
  color: ${(props) => (props.type === "filled" ? "white" : "#b7ccc0")};
  background-color: ${(props) =>
    props.type === "filled" ? "#b7ccc0" : "transparent"};

  &:hover {
    background-color: #ffff;
    color: #b7ccc0;
  }
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline:
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", margin: "10px 5px" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", margin: "10px 5px" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: "row",
    margin: "10px 5px",
    justifyContent: "space-between",
  })}
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ margin: "0px" })}
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "24px" })}
`;
const Hr = styled.hr`
  background-color: #eeee;
  border: none;
  height: 1px;
  margin: 20px 0px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  font-size: 18px;
  font-weight: 300;
  width: 100%;
  border: 1px solid #b7ccc0;
  padding: 15px;
  cursor: pointer;
  letter-spacing: 0.5px;
  background-color: black;
  color: #ffff;

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #b7ccc0;
    color: #b7ccc0;
  }
`;

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
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 68</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 68</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
