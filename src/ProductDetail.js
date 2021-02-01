import { useContext } from 'react';
import DispatchContext from './dispatchContext';

/**
 * ProductsDetail
 *
 * props: 
 * - product
 *
 * state: none
 *
 * ProductsList -> ProductDetail
 **/
function ProductDetail({ id, product }) {
  const dispatch = useContext(DispatchContext);

  function add() {
    dispatch({type: "ADD_TO_CART", product: {...product, id} } );
  }

  function remove() {
    dispatch({type: "REMOVE_FROM_CART", id});
  }

  const {name, description, price, image_url} = product;
  return (
    <div className="ProductDetail">
      <img className="ProductDetail-img"
        src={image_url}
        alt={name}
        height="200px"
        width="200px"
      />
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default ProductDetail;