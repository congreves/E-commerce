import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const CategoryItem = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh", flexDirection: "column" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;

function Categories() {
  return (
    <Container>
      <CategoryItem>
        <Image src={categories[0].img} />
        <Info>
          <Title>{categories.title}</Title>
          <Button>SHOW NOW</Button>
        </Info>
      </CategoryItem>
      <CategoryItem>
        <Image src={categories[1].img} />
        <Info>
          <Title>{categories.title}</Title>
          <Button>SHOW NOW</Button>
        </Info>
      </CategoryItem>
      <CategoryItem>
        <Image src={categories[2].img} />
        <Info>
          <Title>{categories.title}</Title>
          <Button>SHOW NOW</Button>
        </Info>
      </CategoryItem>
    </Container>
  );
}

export default Categories;

