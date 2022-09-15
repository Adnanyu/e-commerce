import './cart-dropdown.style.scss';
import Button from '../button.component/button.component';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-item'/>
            <Button>GO TO THE CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown