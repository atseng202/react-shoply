function rootReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [
          ...state.products, {...action.product }
        ]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state, 
        products: state.products
                    .filter( prod => prod.id !== action.id)
      };
    default:
      throw new Error("unclear action type");
  }
}

export default rootReducer;