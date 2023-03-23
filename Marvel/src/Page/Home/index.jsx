import React from "react"
import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header"

import * as S from './styled';

export const Home = () => {

    return (
        <>
            <Header text={'teste'}>
                pesquisa
            </Header>

            <S.Container>

                <CardComics />
             
            </S.Container>
        </>
    )
}