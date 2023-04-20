import React from "react";

import * as S from "./styled";

import Success from "../../assets/success.png";


export const Notify = ({ type, title, text }) => {

    return (
        <S.Container type={type}>
            <S.Img src={Success} alt="Success" />
            <S.MainNotify>

                <div>
                    <h1>{title}</h1>
                </div>

                <div>
                    <S.P>{text}</S.P>
                </div>
            </S.MainNotify>
        </S.Container>
    )
}