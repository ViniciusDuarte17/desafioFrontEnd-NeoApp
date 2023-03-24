import React from "react";

import * as S from "./styled";

export const Button = ({
    onClick,
    text,
    height,
    width,
    customColor,
    backgroundColor,
    background
}) => {

    return (
        <S.Button
            customColor={customColor}
            backgroundColor={backgroundColor}
            background={background}
            width={width}
            height={height}
            onClick={onClick}>
            {text}
        </S.Button>
    )
}