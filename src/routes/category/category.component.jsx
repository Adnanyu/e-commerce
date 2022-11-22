import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PRoductCard from '../../components/product-card/product-card.component';
import './category.style.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <PRoductCard product={product} key={product.id} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
