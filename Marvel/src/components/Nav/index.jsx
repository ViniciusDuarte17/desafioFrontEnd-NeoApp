import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCart, goToHome } from "../../Router/coordinator";
import { Button } from "../Button";


import * as S from "./styled";

export const Nav = () => {
  const navigate = useNavigate()

  return (
    <>
      <S.ContainerNav >
        <Button
          text={"Home"}
          onClick={() => goToHome(navigate)}
        />

        <Button
          text={"Carrinho"}
          onClick={() => goToCart(navigate)}
        />
      </S.ContainerNav>
    </>
  );
};
