import {ProductsContext} from '../../contexts/product.context'
import { useContext } from 'react'
import PRoductCard from '../../components/product-card/product-card.component'
import './shop.style.scss'
const Shop = () => {
    const {products} = useContext(ProductsContext)
    return(
        <div className='products-container'>
        {products.map((product) => (
            <PRoductCard key={product.id} product={product}/>
        ))}
    </div>
    )
}

export default Shop