import React from "react";
import { Nav } from "../Nav";

import * as S from "./styled"; 


export const Header = ({children}) => {

    return (
        <S.ContainerHeader>
            {children}
            <Nav />
        </S.ContainerHeader>
    )
}