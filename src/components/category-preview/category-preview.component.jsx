import './category-preview.style.scss'
import PRoductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

const CategoryPreview = ({title, products}) => {
    return(
        <div className='category-preview-container'>
            <h2><Link to={`${title}`} className='title' >{title.toUpperCase()}</Link></h2>
            <div className='preview'>
                {products.filter((_, idx) => idx < 4 ).map( product => (
                    <PRoductCard key={product.id} product={product}></PRoductCard>
                )  )}
            </div>
        </div>
    )
}
export default CategoryPreview