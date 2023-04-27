import { fireEvent, render } from "@testing-library/react"

import { Provider } from "react-redux"

import { store } from '../../Redux/store';

import { Pagination } from "../Pagination"

describe( 'Pagination', () => {

    it('Renderização do botão próximo', () => {

        const { getByText } = render(

            <Provider store={store}>
                <Pagination />
            </Provider>
        )

      const nextButton = getByText('Próxima')

      expect(nextButton).toBeInTheDocument()
    });


    it('Renderização do botão Anterior ', () => {

        const { getByText } = render(

            <Provider store={store}>
                <Pagination />
            </Provider>
        )

      const nextButton = getByText('Anterior')

      expect(nextButton).toBeInTheDocument()
    });

    it("Clicar no botão de Próximo deve atualizar a página", () => {
        const {  getByText } = render(

            <Provider store={store}>
                <Pagination />
            </Provider>
        )

        const nextPageButton = getByText( /Próxima/i );

        fireEvent.click(nextPageButton)

        const currentPageNumber = getByText(/Página 2/i)

        expect(currentPageNumber).toBeInTheDocument()
    })
})