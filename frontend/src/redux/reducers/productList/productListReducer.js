import { PRODUCT_LIST_SUCCESS } from "../../types/productList/productListTypes";

const initialState = {
  products: []
}

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
}
