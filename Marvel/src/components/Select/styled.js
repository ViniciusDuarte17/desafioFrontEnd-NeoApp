import styled from "styled-components";


export const ContainerSelect = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 1.5%;
    padding-right: 2%;
    margin-bottom: 2%;
`


export const SelectPage = styled.select`
    box-shadow: none;
    background-color: #333;
    border: none;
    border-radius: 10px;
    color: #fff;
    width: 20%;
    height: 3.2em;
    font-family: Arial, sans-serif; 
    font-size: 16px; 
    line-height: 1.5; 
    text-align: justify;
    cursor: pointer;

    &:hover {
        background-color: #A60000;
        color: #fff;
    }

    option {
        background-color: #A60000;
    }
`