import styled from "styled-components";


export const Button = styled.button`
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#fff'};
    color: ${({ customColor }) => customColor ? customColor : '#fff'};
    width: ${({ width }) => width ? width : '15vh'};
    height: ${({ height }) => height ? height : 'none'};
    border: none;
    border-radius: 16em;
    box-shadow: none;
    font-family: 'Nunito', sans-serif;
    font-size: medium;
  
    cursor: pointer;
    
    &:hover, &:focus {
        background: ${({ background }) => background ? background : '#A60000'};
        color: ${({ color }) => color ? color : '#fff'};
    }
`