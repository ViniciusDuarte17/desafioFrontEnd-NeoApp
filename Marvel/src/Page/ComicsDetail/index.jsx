import React from "react";
import * as S from "./styled";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { goToHome } from "../../Router/coordinator";

export const ComicsDetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const id = Number(params?.id);

    const comics = useSelector((state) => state.api.comics.data?.results);

    const comicsDetail = comics?.find((item) => item.id === id);

    return (
        <>
            <Header>
                <h4>Perfil do Herói em Quadrinhos </h4>
            </Header>
            <S.ContentMain>
                <S.MarvelComics>
                    <S.H1>Título: {comicsDetail?.title}</S.H1>
                </S.MarvelComics>
                <S.MarvelComics>
                    <CardComics
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
                    <Button
                        width={"12em"}
                        height={"2.5em"}
                        customColor={"#fff"}
                        backgroundColor={"#000"}
                        text={"Voltar"}
                        onClick={() => goToHome(navigate)}
                    />
                </S.MarvelComics>
            </S.ContentMain>
        </>
    );
};
