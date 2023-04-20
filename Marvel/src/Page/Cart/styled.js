import styled, { keyframes } from "styled-components"


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

export const ContainerCard = styled.main`
    transition: all 0.3s ease;
    animation: ${slideSection} 2.0s ease;
    color:#fff;
`


export const ContentCart = styled.section`
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-left: 5%;
    padding-bottom: 5%;

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

export const ComicCardWrapperPrice = styled.section`
    width: 15em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2% 0 2% 0;

    span {
        font-family: Arial, sans-serif; 
        font-size: 18px; 
        line-height: 1.5; 
        text-align: justify;
    }
`

export const ComicPurchaseConfirmation = styled.section`
    margin: auto;
    width: 50%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 520px) {
        width: 70%;
        height: 6.5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        
    }
`

export const Paragraph = styled.p`
     font-family: Arial, sans-serif; 
     font-size: 18px; 
     line-height: 1.5; 
     text-align: justify;
`

export const Img = styled.img`
    width: 75px;
    border-radius: 999px;
`