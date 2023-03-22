import React from "react";

import * as S from "./styled";

export const Button = ({onClick, text}) => {

    return(
        <S.Button onClick={onClick}>
           {text}
        </S.Button>
    )
}