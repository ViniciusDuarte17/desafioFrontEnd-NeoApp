import styled , { keyframes } from "styled-components"


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
    transition: all 0.3s ease;
    animation: ${slideSection} 2.0s ease;
`

export const ContentMain = styled.main`
    display: flex;
    flex-direction:column;
    width: 50%;
    height: 40vh;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 5%;
  
  @media screen and (max-width: 853px) {
      width: 60%;
  }
  
  @media screen and (max-width: 585px) {
      width: 70%;
  }

  @media screen and (max-width: 480px) {
      width: 95%;
  }

`

export const H1 = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-size: large;
    color: #fff;
    margin: 2%;
`

export const P = styled.p `
    font-family: Arial, sans-serif; 
    font-size: 18px; 
    line-height: 1.5; 
    color: #fff; 
    text-align: justify;
    margin: 2%;
`


export const MarvelComics = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2%;
`

export const ComicsPrice = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
`

export const SectionButtonNavigate = styled.section`
    width: 60%;
    display: flex;
    justify-content: space-between;
`

export const Img = styled.img`
    width: 75px;
    border-radius: 999px;
`