import React, { useEffect } from "react";

import * as S from "./styled";

import { CardComics } from "../../components/CardComics";
import { Header } from "../../components/Header";

import IronMan from "../../assets/Man.png";

import { useSelector, useDispatch } from "react-redux";

import { fetchComics, setTotalResults } from "../../Redux/apiSlice";

import { Select } from "../../components/Select";

import { Pagination } from "../../components/Pagination";

import { Loader } from "../../components/Loader";

import { setCartToAdd } from "../../Redux/cartSlice";

import { Notify } from "../../components/Notify";

export const Home = () => {
    const dispatch = useDispatch();


    const isWithPrice = true;

    const comics = useSelector((state) => state.api.comics);
    const status = useSelector((state) => state.api.status);

    const pageSize = useSelector((state) => state.api.pageSize);
    const currentPage = useSelector((state) => state.api.currentPage);

    const cartToAdd = useSelector((state) => state.cartSlice.cartToAdd);

    useEffect(() => {
        dispatch(fetchComics(pageSize, currentPage));
        dispatch(setTotalResults(comics.data?.total ?? 0));
    }, [dispatch, pageSize, currentPage]);

    useEffect ( () => {
        if(cartToAdd) {
            setTimeout( () => {
                dispatch( (setCartToAdd(false)))
            }, 3000)
        }
    }, [cartToAdd])

    return (
        <>
            <Header>
                <S.Img src={IronMan} alt="logo Iron Man"/>
            </Header>
            
            {cartToAdd ?
                <Notify
                    type='sucess'
                    title='Sucesso!'
                    text='Produto a adicionado no carrinho'
                /> :
                null}

            <div>
                {status === "success" ? <Select /> : null}
            </div>
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