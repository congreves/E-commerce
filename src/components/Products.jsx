import React, { useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useRecoilState } from "recoil";
import  productState  from "../store/Products/atom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Products() {
const [products, setProducts] = useRecoilState(productState);
  
  const productsFromServer = [{}, {}, {}]

  useEffect(() => {
    setProducts({
      ...products,
      products: productsFromServer
    })
  

  }, [])
  
  console.log(products)
  return (
    <Container>
      {products.popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
