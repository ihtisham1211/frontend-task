import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
export const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: large;
  font-weight: bold;
  margin: 0 10px 0 10px;
  color: #3173cf;
  border-bottom: 1px solid #3173cf;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #7a9bc9;
    border-bottom: 1px solid #7a9bc9;
    transition: all 0.3s ease-in-out;
  }
`;

export const CustomInput = styled.input`
  border: 1px solid #3173cf;
  font-weight: 400;
  height: 48px;
  background: transparent;
  border-radius: 5px;
  color: #3173cf;
  transition: all 0.3s ease-in-out;
  &::placeholder {
    margin: 0 20px 0 20px;
    font-weight: 400;
  }
  &:active {
    transition: all 0.3s ease-in-out;
    color: #7a9bc9;
    border: 1px solid #7a9bc9;
  }
  &::focus {
    transition: all 0.3s ease-in-out;
    color: #7a9bc9;
    border: 1px solid #7a9bc9;
  }
`;

export const CustomButton = styled.button`
  cursor: pointer;
  height: 48px;
  background: #3173cf;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  margin: 0 10px 0 10px;
  border: none;
  &:hover {
    color: #1a1919;
    background: #7a9bc9;
    transition: all 0.3s ease-in-out;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 5px;
  border: 1px solid #3173cf;
  height: 48px;
  padding: 10px;
  width: 200px;
  margin: 10px;
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  margin-left: auto;
`;
