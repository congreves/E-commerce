import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: 54px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
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
export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
export const TopText = styled.span`
  text-decoration: underline:
  cursor: pointer;
  margin: 0px 10px;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", margin: "10px 5px" })}
`;
export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", margin: "10px 5px" })}
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`
  width: 200px;
`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span``;
export const ProductId = styled.span``;
export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.span``;
export const PriceDetail = styled.span`
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
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ margin: "0px" })}
`;
export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "24px" })}
`;
export const Hr = styled.hr`
  background-color: #eeee;
  border: none;
  height: 1px;
  margin: 20px 0px;
`;
