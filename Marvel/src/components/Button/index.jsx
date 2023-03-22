import React from "react";

import * as S from "./styled";

export const Button = ({
    onClick,
    text,
    height,
    width
}) => {

    return (
        <S.Button
            width={width}
            height={height}
            onClick={onClick}>
            {text}
        </S.Button>
    )
}