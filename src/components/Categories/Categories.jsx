import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { categories } from "../../data";
import {
  Container,
  CategoryItem,
  Image,
  Info,
  Title,
  Button,
} from "./Categories.styles";


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

