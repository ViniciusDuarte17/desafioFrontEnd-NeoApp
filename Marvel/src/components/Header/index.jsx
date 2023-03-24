import React from "react";
import { Nav } from "../Nav";

import * as S from "./styled"; 


export const Header = ({children}) => {

    return (
        <S.ContainerHeader>
            <S.H1>{children}</S.H1>
            <Nav />
        </S.ContainerHeader>
    )
}