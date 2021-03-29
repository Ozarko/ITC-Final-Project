import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../../types/productDetails/productDetailsTypes";

const initialState = {
  product: {},
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        product: {},
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        product: action.payload,
      };
    default:
      return state;
  }
};
