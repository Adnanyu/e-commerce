import { useDispatch } from 'react-redux'
import { addToCart, removeCartItem, clearCartItem } from '../../store/cart.slice' 
import './checkout-item.style.scss'

const CheckoutItem = ({cartItem}) => {
    const { price, imageUrl, name, quantity } = cartItem
    const dispatch = useDispatch()

    const clearItemHandelr = () => dispatch(clearCartItem(cartItem));
    const addItemHandler = () => dispatch(addToCart(cartItem));
    const removeItemHandler = () => dispatch(removeCartItem(cartItem));

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandelr}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem