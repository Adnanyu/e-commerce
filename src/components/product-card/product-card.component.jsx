import { useDispatch } from "react-redux";
import Button from "../button.component/button.component";
import './product-card.style.scss'
import { addToCart} from "../../store/cart.slice";

const PRoductCard = ({ product }) => {
    const dispatch = useDispatch()
    const {name , price, imageUrl} = product;
    const addProductToCart = () => dispatch(addToCart(product));
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`this is the ${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default PRoductCard