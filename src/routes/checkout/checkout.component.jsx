import './checkout.style.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/paymant-form/payment.form.component'
import { calculateTotals } from '../../store/cart.slice'
import { useDispatch, useSelector } from 'react-redux' 

const Checkout = () => {
    const { cartItems, cartTotal } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <span className='total'>Total: ${cartTotal}</span>
            <PaymentForm />
            <button onClick={() => dispatch(calculateTotals())}></button>
        </div>
    )
}
export default Checkout