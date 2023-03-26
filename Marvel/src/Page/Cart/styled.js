import styled from "styled-components"



export const ContainerCard = styled.main`
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
`

export const Paragraph = styled.p`
     font-family: Arial, sans-serif; 
     font-size: 18px; 
     line-height: 1.5; 
     text-align: justify;
`