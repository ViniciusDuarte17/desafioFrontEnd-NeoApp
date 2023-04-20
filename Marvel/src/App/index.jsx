import React from "react";
import GlobalStyled from "../GlobalStyled";
import { AppRouter } from "../Router/AppRouter";
import * as S from "./styled";

const App = () => {

  return (
    <S.Container>
      <GlobalStyled />
      
       <AppRouter />
    </S.Container>
  )
}

export default App
