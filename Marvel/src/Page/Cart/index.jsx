import React from "react"
import { Header } from "../../components/Header"

import * as S from "./styled"

import { useSelector } from 'react-redux';
import { CardComics } from "../../components/CardComics";


export const Cart = () => {

    const cart = useSelector((state) => state.cartSlice.cart)

    return (
        <S.ContainerCard>
            <Header>
                Carrinho
            </Header>
            <h1>Página de carrinho</h1>

            <S.ContentCart>
                {
                    cart.length > 0 ?
                        cart.map((comic) => (
                            <CardComics
                                key={comic.id}
                                comic={comic} 
                            />
                        )) :
                        <p>Carrinho vazio</p>
                }
            </S.ContentCart>
        </S.ContainerCard>
    )
}