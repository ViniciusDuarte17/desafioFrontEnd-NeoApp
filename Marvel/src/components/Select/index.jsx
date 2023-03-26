import React from "react"

import * as S from "./styled"

import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage, setPageSize } from "../../Redux/apiSlice"


export const Select = () => {
    const dispatch = useDispatch();

    const pageSize = useSelector((state) => state.api.pageSize)

    const handlePageSizeChange = (pageSize) => {
        dispatch(setPageSize(pageSize));
        dispatch(setCurrentPage(1));
    };

    return (
        <>
            <S.ContainerSelect>
                <S.SelectPage value={pageSize} onChange={(e) => handlePageSizeChange(e.target.value)}>
                    <option value="10">10 por página</option>
                    <option value="20">20 por página</option>
                    <option value="50">50 por página</option>
                    <option value="100">100 por página</option>
                </S.SelectPage>
            </S.ContainerSelect>

        </>
    )
}