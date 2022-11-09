import React from "react";
import { ButtonContainer } from "./button.styles";

const Button = ({ onClickAction, name }) => {
  const handleClickEvent = () => {
    onClickAction();
  };
  return (
    <ButtonContainer onClick={() => handleClickEvent()}>{name}</ButtonContainer>
  );
};

export default Button;
