import React from "react"

import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage } from "../../Redux/apiSlice"


export const Pagination = () => {
    const dispatch = useDispatch();
 
    const pageSize = useSelector((state) => state.api.pageSize)
    const currentPage = useSelector((state) => state.api.currentPage)

    const totalResults = useSelector((state) => state.api.totalResults)

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    };

    const totalPages = Math.ceil(totalResults / pageSize);

    return (
        <>
            <div>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </button>
                
            </div>
        </>
    )
}