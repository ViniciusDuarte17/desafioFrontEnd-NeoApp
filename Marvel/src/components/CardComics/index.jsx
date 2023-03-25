import React from "react";
import { useNavigate } from "react-router-dom";
import { goToComicsDetail } from "../../Router/coordinator";

import { Button } from "../Button"

import * as S from "./styled";

export const CardComics = ({ comic, width, height, cursor }) => {
    const navigate = useNavigate()

    const img = comic.thumbnail && comic.thumbnail.path + '.' + comic.thumbnail.extension

    const price = comic?.prices[0]?.price.toFixed(2).toString().replace('.', ',')

    return (
        <>
            <S.Container
                width={width}
                height={height}
                cursor={cursor}
                onClick={() => goToComicsDetail(navigate, comic.id)}
            >
                <S.Img src={img} alt="marvel" />

            </S.Container>

            <S.ComicsPrice>
                <Button
                    width={"9em"}
                    height={"2.7em"}
                    customColor={"#fff"}
                    backgroundColor={"#4fc700"}
                    text={"Adicionar no carrinho"}
                />
                <S.P>
                    Preço: {price} R$
                </S.P>

            </S.ComicsPrice>
    
        </>
    )
}