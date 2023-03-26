import React from "react";

import * as S from "./styled";

export const Button = ({
    onClick,
    text,
    height,
    width,
    customColor,
    backgroundColor,
    background,
    disabled
}) => {

    return (
        <S.Button
            disabled={disabled}
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