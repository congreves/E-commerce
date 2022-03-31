import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  ${mobile({ height: "50px" })}
`;
export const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  ${mobile({ display: "none" })}
`;
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 36px;
  ${mobile({ fontSize: "20px" })}
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "space-between" })}
`;

export const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "14px", marginLeft: "15px" })}
`;

export const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};
