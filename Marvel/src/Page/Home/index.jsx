import React from "react"
import { Header } from "../../components/Header"

import * as S from './styled';

export const Home = () => {

    return (
        <>
         <Header text={'teste'}>
            pesquisa
         </Header>
    
         <S.Container>
          <h1>Listagem de Quadrinhos de HQ's 10</h1>
         </S.Container>
        </>
    )
}