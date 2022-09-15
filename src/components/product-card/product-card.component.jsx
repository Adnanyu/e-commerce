import Button from "../button.component/button.component";
import './product-card.style.scss'

const PRoductCard = ({product}) => {
    const {name , price, imageUrl} = product;
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`this is the ${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    )
}

export default PRoductCard