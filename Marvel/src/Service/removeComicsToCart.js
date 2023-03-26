import { setCart } from "../Redux/cartSlice"

export const removeComicsToCart = (itemRemove, cart, dispatch) => {

    const index = cart.findIndex( (indexComics) => indexComics.id === itemRemove.id)
  
    const newCart = [...cart]

    if(newCart[index].amount === 1) {
        // Caso o amount for igual a 1 
        // é removido da tela de carrinho
        newCart.splice(index, 1)
    } else {
        // Caso o amount for maior que 1 é subtraído só o amount
        
        newCart[0].amount -= 1
    }
    dispatch(setCart(newCart))
}