import React, { useEffect } from "react"
import * as S from './styled';

import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header"

import { useSelector, useDispatch } from 'react-redux';

import { fetchComics, setTotalResults } from "../../Redux/apiSlice"
import { Pagination } from "../../components/Pagination";
import { Select } from "../../components/Select";


export const Home = () => {
    const dispatch = useDispatch();

    const comics = useSelector((state) => state.api.comics);
 
    const pageSize = useSelector((state) => state.api.pageSize)
    const currentPage = useSelector((state) => state.api.currentPage)

    useEffect(() => {
        dispatch(fetchComics(pageSize, currentPage));
        dispatch(setTotalResults(comics?.data?.results?.length ?? 0));
    }, [dispatch, currentPage, pageSize]);

    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (
        <>
            <Header >
                <h3>Heróis </h3>
            </Header>
                <Select />
            <S.Container>
                {
                    comics && comics?.data?.results?.slice(startIndex, endIndex).map((comic) => (
                        <div key={comic?.id}><CardComics comic={comic} /></div>
                    ))
                }
            </S.Container>

        </>
    )
}