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
      <div className="ProductsList-total">
        Items in cart: {products.cart.length}
      </div>
      {Object.keys(products.products).map(id => <ProductDetail key={id} id={id} product={products.products[id]} />)}
    </div>
  );
}

export default ProductsList;
