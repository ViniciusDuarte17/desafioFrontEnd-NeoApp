import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice( {
    name: 'cartSlice',
    initialState:{
        cart:[]
    },

    reducers: {
        setCart:(state, action) => {
            state.cart = action.payload
        },
    }
});

export const { cart, setCart } = cartSlice.actions;

export default cartSlice.reducer;