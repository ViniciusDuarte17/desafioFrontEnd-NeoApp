import styled from "styled-components";


export const Container = styled.div`
    width: ${({ width }) => width ? width : '15em'};
    height: ${({ height }) => height ? height : '19em'};
    margin-top: 4%;
    cursor:${({ cursor }) => cursor ? cursor : 'pointer'};
`

export const Img = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover;
`
export const ComicsPrice = styled.section`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
`

export const P = styled.p `
    font-family: Arial, sans-serif; 
    font-size: 18px; 
    line-height: 1.2; 
    color: #333; 
    text-align: justify;
    margin: 1%;
`