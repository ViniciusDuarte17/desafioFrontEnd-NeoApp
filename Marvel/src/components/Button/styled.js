import styled from "styled-components";


export const Button = styled.button`
    background: #fff;
    width: ${({ width }) => width ? width : '15vh'};
    height: ${({ height }) => height ? height : 'none'};
    border: none;
    border-radius: 16em;
    box-shadow: none;
    font-family: 'Nunito', sans-serif;
    font-size: medium;
  
    cursor: pointer;
    
    &:hover, &:focus {
        background: ${({ background }) => background ? background : 'red'};
        color: ${({ color }) => color ? color : '#fff'};
    }
`