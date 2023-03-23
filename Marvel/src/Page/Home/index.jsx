import React, { useEffect } from "react"
import * as S from './styled';

import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header"

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../Redux/apiSlice';



export const Home = () => {
    const dispatch = useDispatch();

    const comics = useSelector((state) => state.api.comics);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            <Header >
                pesquisa
            </Header>

            <S.Container>
                {
                  comics && comics?.data?.results?.map( (comic) => (
                        <div key={comic?.id}><CardComics comic={comic} /></div>
                    ))
                }
            </S.Container>
        </>
    )
}