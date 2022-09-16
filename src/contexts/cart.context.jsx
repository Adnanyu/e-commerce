import { createContext, useState, useEffect } from "react";
import CartDropdown from "../components/cart-dropdown/cart-dropdown.component";
import CartItem from "../components/cart-item/cart-item.component";

const addCartItem = (cartItems, productToAdd ) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem );
    }

    return [ ...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCArtItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if(existingCartItem.quantity == 1){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem );
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    ClearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [cartCount, setCartCount ] = useState(0)
    const [cartTotal, setcartTotal ] = useState(0)

    useEffect(() => { 
        const newCArtCount = cartItems.reduce((total, cartItem) =>
        total + cartItem.quantity, 0)
        setCartCount(newCArtCount);
    },[cartItems])

    useEffect(() => { 
        const newCArtTotal = cartItems.reduce((total, cartItem) =>
        total + cartItem.quantity * cartItem.price, 0)
        setcartTotal(newCArtTotal);
    },[cartItems])
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCArtItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }
    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart, 
        cartItems , 
        cartCount, 
        cartTotal};
    return(
       <CartContext.Provider value={value}>{children}</CartContext.Provider> 
    )
}