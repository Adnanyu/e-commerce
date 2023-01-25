import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
};



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsCartOpen(state) {
            state.isCartOpen = !state.isCartOpen
        },
        addToCart(state, action) {
            const newItem = { ...action.payload, quantity: 1 ,totalPrice: action.payload.price};
            // to check if item is already available
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id);
            
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price
                state.cartCount++
                state.cartTotal += existingItem.price
            } else {
                state.cartItems.push(newItem)
                state.cartCount++
                state.cartTotal += newItem.price
            }
        },
        removeCartItem(state, action) {
            const itemToRemove = action.payload
            const existingCartItem = state.cartItems.find(
                (item) => item.id === itemToRemove.id);
            
            if (existingCartItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== itemToRemove.id);
                state.cartCount--
                state.cartTotal -= existingCartItem.price
            } else {
                existingCartItem.quantity--;
                state.cartCount--
                existingCartItem.totalPrice -= existingCartItem.price
                state.cartTotal -= existingCartItem.totalPrice
            }
        },
        clearCartItem(state, action) {
            const itemToClear = action.payload
            state.cartCount -= itemToClear.quantity
            state.cartTotal -= itemToClear.totalPrice
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
        },

    }
})
export default cartSlice.reducer
export const {addToCart, removeCartItem, clearCartItem, setIsCartOpen} = cartSlice.actions


