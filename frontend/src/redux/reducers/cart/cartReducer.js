import { CART_ADD_ITEM, SHOW_CART } from "../../types/cart/cartTypes";

const initialState = {
  open: false,
  productInCart: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        productInCart: [
          ...state.productInCart,
          action.payload
        ]
      };
    case SHOW_CART: 
      return {
        ...state,
        open: !state.open
      }
    default:
      return state;
  }
};
