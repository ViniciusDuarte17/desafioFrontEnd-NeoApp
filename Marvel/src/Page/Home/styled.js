import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 914px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 1% 0 5% 0%;
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr 1fr ;
        padding: 1% 0 5% 0%;
    }

    @media screen and (max-width: 474px) {
        grid-template-columns: 1fr;
        padding: 5% 0 5% 16%;
    }
`