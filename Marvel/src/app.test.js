import App from "./App";

import { render } from '@testing-library/react'

import { store } from './Redux/store'
import { Provider } from 'react-redux'

describe('Iniciando teste  ', () => {

  it('caso: 1 -> Testando a renderização do app', () => {
    
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    
    const app = getByText('Home')

    expect(app).toBeInTheDocument()
  })
})