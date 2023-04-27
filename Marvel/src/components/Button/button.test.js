import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';


describe( "Testando component Button", () => {

    it('Caso 1: Renderização do botão', () => {
        const {getByText} = render(<Button text={'Click me'}/>)
        
        const button = getByText('Click me')

        expect(button).toBeInTheDocument()
    });

    it("Caso 2: Clicando no botão", () => {

        const onClick = jest.fn();

        const {getByText} = render(<Button text={'Click me'} onClick={onClick}/>)

        const button = getByText('Click me')

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled()
    })
})