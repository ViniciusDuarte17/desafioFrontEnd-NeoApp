import React from "react";

import * as S from "./styled"; 

export const CardComics = ({comic}) => {

    const img = comic.thumbnail.path+'/portrait_medium.jpg'

    return (
        <S.Container>
            <S.Img src={img} alt="marvel" />
           
        </S.Container>
    )
}