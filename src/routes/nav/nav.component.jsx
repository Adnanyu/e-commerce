import { Outlet, Link } from "react-router-dom";
import { useSelector} from "react-redux";
import './nav.style.scss'
import { sigOutUser } from "../../utilities/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)
    const currentUser = useSelector((state) => state.user.currentUser)

    return(
        <>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                  <a className='logo'/>AD<a/>
                </Link>    
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                SHOP
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={sigOutUser}> SIGN OUT</span>
                        ):( <Link className="nav-link" to='/auth'>
                        SIGN IN
                        </Link>
                    )
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}
export default Navigation