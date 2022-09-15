import { ReactComponent as ShoppingCart } from '../../assests/shopping-bag.svg';
import './cart-icon.style.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'

const CartIcon= () => {

    const {setIsCartOpen, isCartOpen} = useContext(CartContext);

    const toggleIsCardOpen = () =>  setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleIsCardOpen}>
            <ShoppingCart className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}
export default CartIcon