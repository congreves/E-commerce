import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dbe7dc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RegistrationBox = styled.div`
  padding: 20px;
  width: 40%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;
export const Button = styled.button`
  width: 40%;
  border: 1px solid #b7ccc0;
  padding: 15px 20px;

  background-color: #b7ccc0;
  color: #ffff;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ffff;
    color: #b7ccc0;
  }
`;
