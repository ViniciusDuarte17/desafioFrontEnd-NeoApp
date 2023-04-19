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
          width={'18vh'}
          background={"#000"}
          customColor={"#000"}
          text={"Home"}
          onClick={() => goToHome(navigate)}
        />
       
        <Button
          width={'18vh'}
          background={'#4fc700'}
          customColor={'#000'}
          text={"Carrinho"}
          onClick={() => goToCart(navigate)}
        />
      </S.ContainerNav>
    </>
  );
};
