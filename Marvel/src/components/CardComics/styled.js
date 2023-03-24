import styled from "styled-components";


export const Container = styled.div`
    width: ${({ width }) => width ? width : '16em'};
    height: ${({ height }) => height ? height : '16em'};
    margin-top: 4%;
    cursor:${({ cursor }) => cursor ? cursor : 'pointer'};
`

export const Img = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: contain;
`
