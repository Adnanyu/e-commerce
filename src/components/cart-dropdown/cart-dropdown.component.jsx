import { useSelector } from 'react-redux';
import './cart-dropdown.style.scss';
import Button from '../button.component/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const  cartItems  = useSelector(state => state.cart.cartItems)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/Checkout')
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    ) : (
                        <span>Your Cart Is Empty</span>
                    )
                }
        
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO THE CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown