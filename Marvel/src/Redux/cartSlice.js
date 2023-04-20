import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice( {
    name: 'cartSlice',
    initialState:{
        cart:[],
        cartToAdd: false
    },

    reducers: {
        setCart:(state, action) => {
            state.cart = action.payload
        },
        setCartToAdd:(state, action) => {
            state.cartToAdd = action.payload
        }
    }
});

export const {  setCart, setCartToAdd } = cartSlice.actions;

export default cartSlice.reducer;