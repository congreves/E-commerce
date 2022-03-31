import styled from "styled-components";

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;
export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
export const Button = styled.button`
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
