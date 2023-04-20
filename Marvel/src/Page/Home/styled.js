import styled, { keyframes } from "styled-components";

const slideSection = keyframes`
    0% {
        transform: translateY(-100%);
    }
    75% {
        transform: translate(0);
    }
    75% {
        transform: translateY(5%);
    }
    100% {
        transform: translate(0);
    }
`

export const Container = styled.main`
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-left: 5%;
    padding-bottom: 5%;
    transition: all 0.3s ease;
    animation: ${slideSection} 2.0s ease;

    @media screen and (max-width: 1037px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 1% 0 5% 0%;
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr 1fr ;
        padding: 1% 0 5% 0%;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        padding: 5% 0 5% 16%;
    }
`

export const Pagination = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    padding-bottom: 2%;
    padding-top: 2%;

    span{ 
        background-color: #000;
        color: #fff;
        font-family: Arial, sans-serif; 
        font-size: 17px; 
        line-height: 1.5; 
        text-align: justify;
        margin: 0 2% 0 2%
    }
`

export const SectionLoader = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 10%;
`

export const Img = styled.img`
    width: 75px;
    border-radius: 999px;
`