import React, { useEffect } from "react";
import * as S from "./styled";

import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header";

import { useSelector, useDispatch } from "react-redux";

import { fetchComics, setTotalResults } from "../../Redux/apiSlice";

import { Select } from "../../components/Select";

import { Pagination } from "../../components/Pagination";

import { Loader } from "../../components/Loader";

export const Home = () => {
    const dispatch = useDispatch();

    const isWithPrice = true;

    const comics = useSelector((state) => state.api.comics);
    const status = useSelector((state) => state.api.status);

    const pageSize = useSelector((state) => state.api.pageSize);
    const currentPage = useSelector((state) => state.api.currentPage);

    useEffect(() => {
        dispatch(fetchComics(pageSize, currentPage));
        dispatch(setTotalResults(comics.data?.total ?? 0));
    }, [dispatch, pageSize, currentPage]);

    return (
        <>
            <Header>Heróis</Header>

            {status === "success" ? <Select /> : null}
            {status === "success" ? (
                <S.Container>
                    {comics?.data?.results?.map((comic) => {
                        if (
                            comic.thumbnail.path !==
                            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                        ) {
                            return (
                                <div key={comic.id}>
                                    <CardComics isWithPrice={isWithPrice} comic={comic} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </S.Container>
            ) : (
                <S.SectionLoader>
                    <Loader />
                </S.SectionLoader>
            )}

            {status === "success" ? <Pagination /> : null}
        </>
    );
};