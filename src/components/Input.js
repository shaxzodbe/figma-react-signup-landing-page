import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autoComplete="off"
      />
      <Status />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 80%;
  max-width: 380px;
  min-width: 250px;
  height: 40px;
  font-family: inherit;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 31px -23px #00000040;
  border-radius: 11px;
  padding: 0 1rem;
  outline: none;
  transition: 0.2s ease-in;

  &:hover {
    transform: translateY(-1px);
    border: none;
    box-shadow: 0px 1px 10px 0px #00000040;
  }
  /* &:focus-within {
    box-shadow: 0px 1px 13px 3px #47eca7;
  } */
  /* &:focus-visible {
    box-shadow: 0px 1px 13px 3px #fe2f75;
  } */
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;

export default Input;
