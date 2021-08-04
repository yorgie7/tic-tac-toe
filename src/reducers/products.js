const initialState = { products: []};

export const products = (state = initialState, action) => {
  switch (action.type) {
    
    case "SET_PRODUCTS":
        
        return {
          ...state,
          products: action.products,
        };
  

    default:
      return state;
  }
};
