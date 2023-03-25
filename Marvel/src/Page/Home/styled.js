import styled from "styled-components";


export const Container = styled.main`
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