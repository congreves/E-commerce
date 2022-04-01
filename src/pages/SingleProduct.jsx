import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { mobile } from "../responsive";
import productState from "../store/Products/atom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { CreateCartAPI } from "../store/Cart/atom";

function Product() {
  const params = useParams();
  const products = useRecoilValue(productState);
  const product = products.find((p) => p.id === parseInt(params.productId));
  const { addToCart } = CreateCartAPI();

  const [qty, setQty] = useState(1);

  function handleReduceQty() {
    if (qty > 1) {
      setQty(qty - 1);
      return;
    }
    setQty(1);
  }

  function handleAddToQty() {
    setQty(qty + 1);
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <DeleteOutlineRoundedIcon onClick={handleReduceQty} />
              <Amount>{qty}</Amount>
              <AddCircleOutlineOutlinedIcon onClick={handleAddToQty} />
            </AmountContainer>

            <Button onClick={() => addToCart(product.id, qty)}>
              Add To Cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: block;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  cursor: pointer;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid lightgrey;
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  cursor: pointer;
`;
const Button = styled.button`
  border: 1px solid #b7ccc0;
  padding: 15px;
  cursor: pointer;
  font-weight: 500;

  background-color: #ffff;
  color: #b7ccc0;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #b7ccc0;
    color: #ffff;
  }
`;

export default Product;
