import React from "react"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

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

            <S.ContentCart>
                {
                    cart.length > 0 ?
                        cart.map((comic) => (
                            <section>
                                <CardComics
                                    key={comic.id}
                                    comic={comic}
                                />
                                <S.ComicCardWrapperPrice>
                                    <span>Preço: {'2,50'}</span>
                                    <Button 
                                        text={'Remover'}
                                        backgroundColor={'#4fc700'}
                                        customColor={'#fff'}
                                        width={'6.3em'}
                                        height={'2em'}
                                    />

                                </S.ComicCardWrapperPrice>
                            </section>
                        )) :
                        <p>Carrinho vazio</p>
                }

            </S.ContentCart>

            <S.ComicPurchaseConfirmation>
                <h2>
                    valor total: 15,00
                </h2>
                <Button
                    text={'Confirmar pedido'}
                    customColor={'#000'}
                    background={'#4fc700'}
                    width={'12em'}
                    height={'2.7em'}
                />
            </S.ComicPurchaseConfirmation>
        </S.ContainerCard>
    )
}