import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview products={products} title={title} key={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
