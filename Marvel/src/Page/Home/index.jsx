import React, { useEffect } from "react"
import * as S from './styled';

import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header"

import { useSelector, useDispatch } from 'react-redux';

import { fetchComics, setTotalResults } from "../../Redux/apiSlice"

import { Select } from "../../components/Select";

import { Pagination } from "../../components/Pagination";

export const Home = () => {
    const dispatch = useDispatch();

    const comics = useSelector((state) => state.api.comics);

    const pageSize = useSelector((state) => state.api.pageSize)
    const currentPage = useSelector((state) => state.api.currentPage)

    useEffect(() => {
        dispatch(fetchComics(pageSize, currentPage));
        dispatch(setTotalResults(comics.data?.total ?? 0));
    }, [dispatch, pageSize, currentPage]);


    return (
        <>
            <Header >
                Heróis
            </Header>
            <Select />
            <S.Container>
                {
                    comics?.data?.results?.map((comic) => (
                        <div key={comic?.id}><CardComics comic={comic} /></div>
                    ))
                }
            </S.Container>
            <Pagination />
        </>
    )
}