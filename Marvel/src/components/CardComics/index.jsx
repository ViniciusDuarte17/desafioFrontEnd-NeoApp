import React from "react";

import * as S from "./styled"; 

export const CardComics = ({comic}) => {

    const img = comic.images[0]?.path+'/portrait_medium.jpg'
    
    return (
        <S.Container>
            <S.Img src={img} alt="marvel" />
           
        </S.Container>
    )
}