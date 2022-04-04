import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../store/auth/atom";
import styled from "styled-components";
import productState from "../store/Products/atom";
import userState from "../store/users/atom";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #ffff;

`;
const Wrapper = styled.div`
display:flex;
padding: 20px;
justify-content: space-between;
flex-wrap: wrap;

`
const ProductContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
background-color: #f5fbfd;
position: relative;

&:hover {
  opacity: 1;
}
`;

const ProductInfo = styled.h3`

`;
const Image = styled.img`
height: 55%;
max-width: 75%;
z-index: 2;
`;
const UserContainer = styled.div`
  padding: 20px;
  width: 40%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const UserInfo = styled.h3`
`;

function Admin() {
  const products = useRecoilValue(productState);
  const users = useRecoilValue(userState);
  const { user } = useRecoilValue(authState);

  if (!user) {
    return <div>You need to log in</div>;
  }

  if (user.role === "user") {
    return <div>You don't have access to this page</div>;
  }

  return (
    <Container>
          <Navbar />
          <Wrapper>
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductContainer>
              <Image src={product.image} />
              <ProductInfo>{product.title}</ProductInfo>
              <ProductInfo>{product.title}</ProductInfo>
              <ProductInfo>{product.price}</ProductInfo>
            </ProductContainer>
          </Link>
        );
      })}

    
      {users.map((user) => {
        return (
          <UserContainer>
            <UserInfo key={users}>Firstname : {user.name.firstname}</UserInfo>
            <UserInfo>Lastname : {user.name.lastname}</UserInfo>
            <UserInfo>Username : {user.username}</UserInfo>
            <UserInfo>Password : {user.password}</UserInfo>
          </UserContainer>
        );
      })}
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Admin;
