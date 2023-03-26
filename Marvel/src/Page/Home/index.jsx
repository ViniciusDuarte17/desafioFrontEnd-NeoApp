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

    const isWithPrice = true

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
                        <div 
                            key={comic?.id}>
                            <CardComics 
                                isWithPrice={isWithPrice}
                                comic={comic} 
                            />
                        </div>
                    ))
                }
            </S.Container>
            <Pagination />
        </>
    )
}


 // const addComicsToCart = (newComics) => {
    //     const index = cart.findIndex( (indexComics) => indexComics.id === newComics.id)
       
    //     const newCart = [...cart]

    //     if(index === -1) {
    //         //  Caso o cart estiver vazio o findIndex me retornará -1
    //         //  Então o meu cart estará vazio. Aqui vai à lógica para 
    //         //  Adicionar o comics no cart 
    //         const cartItem = {...newComics, amount: 1}
    //         newCart.push(cartItem)
    //     } else {
    //         // Caso já existe um item no carrinho
    //         // Esse algorítimo mudara só a quantidade do item
    //         newCart[index].amount = newCart[index].amount + 1
    //     }
    //     dispatch(setCart(newCart))
    // }