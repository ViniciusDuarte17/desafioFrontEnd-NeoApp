import React from "react"
import * as S from './styled';


import { useSelector, useDispatch } from 'react-redux';

import {  setCurrentPage } from "../../Redux/apiSlice"

import { Button } from "../Button";


export const Pagination = () => {

    const dispatch = useDispatch();

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    };

    const pageSize = useSelector((state) => state.api.pageSize)
    const currentPage = useSelector((state) => state.api.currentPage)
    const totalResults = useSelector((state) => state.api.totalResults)


    const totalPages = Math.ceil(totalResults / pageSize);

    return (
        <>
          <S.Pagination>
                <Button
                    width={"12em"}
                    height={"2.5em"}
                    customColor={"#fff"}
                    backgroundColor={"#337607"}
                    text={"Anterior"}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                <span >
                    Página {currentPage} de {totalPages}
                </span>
                <Button
                    width={"12em"}
                    height={"2.5em"}
                    customColor={"#fff"}
                    backgroundColor={"#337607"}
                    text={"Próxima"}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </S.Pagination> 
        </>
    )
}