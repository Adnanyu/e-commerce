import { ReactComponent as ShoppingCart } from '../../assests/shopping-bag.svg';
import './cart-icon.style.scss'
import { useDispatch, useSelector} from 'react-redux';
import { setIsCartOpen } from '../../store/cart.slice';

const CartIcon = () => {
    const dispatch = useDispatch()
    const  cartCount  = useSelector(state => state.cart.cartCount);

    const toggleIsCardOpen = () =>  dispatch(setIsCartOpen());
    return(
        <div className='cart-icon-container' onClick={toggleIsCardOpen}>
            <ShoppingCart className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default CartIcon