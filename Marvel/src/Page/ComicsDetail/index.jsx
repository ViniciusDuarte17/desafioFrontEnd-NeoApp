import React from "react";
import * as S from "./styled";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { goToCart, goToHome } from "../../Router/coordinator";

import IromMan from "../../assets/Man.png";

export const ComicsDetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const isWithPrice = true

    const id = Number(params?.id);

    const comics = useSelector((state) => state.api.comics.data?.results);

    const comicsDetail = comics?.find((item) => item.id === id);

    return (
        <S.Container>
            <Header>
                <S.Img src={IromMan} alt="Logo irom man" />
            </Header>
            <S.ContentMain>
                <S.MarvelComics>
                    <S.H1>Título: {comicsDetail?.title}</S.H1>
                </S.MarvelComics>
                <S.MarvelComics>
                    <CardComics
                        isWithPrice={isWithPrice}
                        width={"15em"}
                        height={"19em"}
                        cursor={"default"}
                        comic={comicsDetail}
                    />

                </S.MarvelComics>

                <S.MarvelComics>
                    <S.H1>Descrição</S.H1>
                    <S.P>
                        {comicsDetail?.description === null ||
                            comicsDetail?.description === "" ? (
                            <p>Quadrinhos sem descrição</p>
                        ) : (
                            <p>{comicsDetail?.description}</p>
                        )}
                    </S.P>
                    <S.SectionButtonNavigate>
                    <Button
                        width={"10em"}
                        height={"2.5em"}
                        customColor={"#fff"}
                        backgroundColor={"#4a4848"}
                        text={"Voltar"}
                        onClick={() => goToHome(navigate)}
                    />
                    <Button
                        width={"10em"}
                        height={"2.5em"}
                        customColor={"#fff"}
                        backgroundColor={"#4fc700"}
                        text={"Ver no carrinho"}
                        onClick={() => goToCart(navigate)}
                    />
                    </S.SectionButtonNavigate>
                </S.MarvelComics>
            </S.ContentMain>
        </S.Container>
    );
};
