import React from "react";
import { useNavigate } from "react-router-dom";
import { goToComicsDetail } from "../../Router/coordinator";

import * as S from "./styled"; 

export const CardComics = ({comic, width, height, cursor }) => {
    const navigate = useNavigate()

    const img = comic?.images[0]?.path+'/portrait_medium.jpg'
    
    return (
        <S.Container 
         width={width}
         height={height}
         cursor={cursor}
         onClick={() => goToComicsDetail(navigate, comic.id)}
        >
            <S.Img src={img} alt="marvel" />  
        </S.Container>
    )
}