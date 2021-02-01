import { useContext } from 'react';
import ProductDetail from './ProductDetail';
import ProductContext from './productContext';

/**
 * ProductsList
 *
 * props: 
 * - products
 *
 * state: none
 *
 * App -> ProductsList -> ProductDetail
 **/
function ProductsList() {
  const products = useContext(ProductContext);

  return (
    <div className="ProductsList">
      
    </div>
  );
}

export default ProductsList;
