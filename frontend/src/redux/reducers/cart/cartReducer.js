import { ADD_PRODUCT_QTY, CART_ADD_ITEM, SHOW_CART } from "../../types/cart/cartTypes";

const initialState = {
  open: false,
  productInCart: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        productInCart: [...state.productInCart, action.payload],
      };
    case SHOW_CART:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_CART_PRODUCT_QTY:
      return {
        ...state,
        productInCart: [
          state.productInCart.find(product => product.id != action.payload.product.id),
          action.payload.product,
        ],
      };
    default:
      return state;
  }
};
