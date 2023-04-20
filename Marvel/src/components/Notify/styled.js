import styled from "styled-components";


export const Container = styled.section`
    background: ${({ type }) => type === 'sucess' ? '#2D6A4F' : 'red'};

    position: fixed;
    right: 0;
    width: 300px;
    height: 75px;
    padding: 10px;
    z-index: 105;
    border-radius:22px;
    color:#fff;

    font-family: 'Poppins';
    font-style: normal;
    
`


export const MainNotify = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

`

export const Img = styled.img`
    position: absolute;
    top: -32px;
    left: 8px;
    width: 55px;
`

export const P = styled.p`
    color: #fff;
    font-family: Arial, sans-serif; 
    font-size: 17px; 
    text-align: justify;
`