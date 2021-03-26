import { CART_ADD_ITEM, CART_REMOVE_ITEM, SHOW_CART } from "../../types/cart/cartTypes";

const cartItemsFromStorage = localStorage.getItem('productInCart') ? JSON.parse(localStorage.getItem('productInCart')) : []

const initialState = {
  open: false,
  productInCart: cartItemsFromStorage
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const productItem = action.payload
      const existItem = state.productInCart.find(x => x.product === productItem.product)

      if(existItem) {
        return {
          ...state,
          productInCart: state.productInCart.map(x => x.product === existItem.product ? productItem : x)
        }
      }else {
        return {
          ...state,
          productInCart: [...state.productInCart, productItem],
        };
      }
    case CART_REMOVE_ITEM: 
      return {
        ...state,
        productInCart: state.productInCart.filter((item) => item.product !== action.payload)
      };
    case SHOW_CART:
      return {
        ...state,
        open: !state.open,
      };

    default:
      return state;
  }
};
