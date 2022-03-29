import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
import  productState  from "../store/Products/atom";
import { atom, useRecoilState } from "recoil";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

function Categories() {

  const  [products, setProducts] = useRecoilState(productState)
  return (
    <Container>
      {products.categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;
