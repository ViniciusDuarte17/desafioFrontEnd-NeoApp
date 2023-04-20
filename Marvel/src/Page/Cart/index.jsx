import React from "react"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

import ImgCart from "../../assets/cart.avif";

import * as S from "./styled"

import { useSelector, useDispatch } from 'react-redux';
import { CardComics } from "../../components/CardComics";
import { removeComicsToCart } from "../../Service/removeComicsToCart";


export const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cartSlice.cart)

    let priceToPay = 0

    cart.forEach((comics) => {
        priceToPay += comics?.prices[0].price * comics.amount
    })

    return (
        <S.ContainerCard>
            <Header>
                <S.Img src={ImgCart} alt="img cart" />
            </Header>

            <S.ContentCart>
                {
                    cart.length > 0 ?
                        cart.map((comic) => (
                            <section>
                                <S.Paragraph>
                                    Quantidade:
                                    <strong> {comic?.amount}</strong>
                                </S.Paragraph>
                                <CardComics
                                    key={comic.id}
                                    comic={comic}
                                />
                                <S.ComicCardWrapperPrice>
                                    <span>
                                        Preço:
                                        {comic?.prices[0].price.toFixed(2).toString().replace('.', ',')}
                                    </span>
                                   
                                    <Button
                                        text={'Remover'}
                                        backgroundColor={'#4fc700'}
                                        customColor={'#fff'}
                                        width={'6.3em'}
                                        height={'2em'}
                                        onClick={() => removeComicsToCart(comic,cart, dispatch)}
                                    />
                                    

                                </S.ComicCardWrapperPrice>
                            </section>
                        )) :
                       null
                }

            </S.ContentCart>

            <S.ComicPurchaseConfirmation>
                <h2>
                   {
                    cart.length > 0 ?
                    `
                      Valor total: ${priceToPay.toFixed(2).toString().replace('.', ',')}
                    ` 
                    : 
                    'Carrinho vazio ):'
                   }
                </h2>
                {
                    cart.length > 0 ?
                    <Button
                    text={'Confirmar pedido'}
                    customColor={'#000'}
                    background={'#4fc700'}
                    width={'12em'}
                    height={'2.7em'}
                /> : null
                }
            </S.ComicPurchaseConfirmation>
        </S.ContainerCard>
    )
}