import { setCart, setCartToAdd } from "../Redux/cartSlice"

export const addComicsToCart = (newComics, cart, dispatch) => {
    dispatch(setCartToAdd(true))
    const index = cart.findIndex( (indexComics) => indexComics.id === newComics.id)
   
    const newCart = [...cart]

    if(index === -1) {
        //  Caso o cart estiver vazio o findIndex me retornará -1
        //  Então o meu cart estará vazio. Aqui vai à lógica para 
        //  Adicionar o comics no cart 
        const cartItem = {...newComics, amount: 1}
        newCart.push(cartItem)
    } else {
        // Caso já existe um item no carrinho
        // Esse algorítimo mudara só a quantidade do item
        const updatedCartItem = { ...newCart[index], amount: newCart[index].amount + 1 };
        newCart[index] = updatedCartItem;
  
    }
    dispatch(setCart(newCart))
}