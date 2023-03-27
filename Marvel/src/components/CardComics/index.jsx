import React from "react";
import { useNavigate } from "react-router-dom";
import { goToComicsDetail } from "../../Router/coordinator";
import { addComicsToCart } from "../../Service/addComicsToCart copy";

import { useSelector, useDispatch } from 'react-redux';

import { Button } from "../Button"

import * as S from "./styled";

export const CardComics = ({ comic, width, height, cursor, isWithPrice }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const img = comic.thumbnail && comic.thumbnail.path + '.' + comic.thumbnail.extension

    const price = comic?.prices[0]?.price.toFixed(2).toString().replace('.', ',')

    const cart = useSelector((state) => state.cartSlice.cart)

    return (
        <>
            <S.Container
                width={width}
                height={height}
                cursor={cursor}
                onClick={() => goToComicsDetail(navigate, comic.id)}
            >
                <S.Img src={img} alt={!comic?.variantDescription ? "Quadrinho da marvel" : comic?.variantDescription} />

            </S.Container>

            {
                isWithPrice === true ?
                    <S.ComicsPrice>
                        <Button
                            width={"9em"}
                            height={"2.7em"}
                            customColor={"#fff"}
                            backgroundColor={"#ce3737"}
                            text={"Adicionar no carrinho"}
                            onClick={() => addComicsToCart(comic, cart, dispatch)}
                        />
                        <S.P>
                            Preço: {price} R$
                        </S.P>

                    </S.ComicsPrice> : null
            }

        </>
    )
}