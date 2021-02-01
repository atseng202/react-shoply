import './App.css';
import React, { useReducer } from "react";
import rootReducer from './rootReducer';
import DispatchContext from './dispatchContext';
import ProductContext from "./productContext";
import ProductsList from './ProductsList';
import data from './data.json';

/** 
 * App 
 * 
 * props: none
 * 
 * state: 
 * - products: obj of product objs like,
 *              { id: {"name", "price", "description","image_url" },...}
 * 
 * App -> ProductsList
 **/  

const INITIAL_STATE = {
  products: data.products,
  cart: []
};

function App() {
  const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE);

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value={state}>
          <ProductsList />
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
