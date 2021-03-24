import { CART_ADD_ITEM, SHOW_CART } from "../../types/cart/cartTypes"


export const addProductToCart = (product, qty) => {
  const productItem = {...product, qty }
  return {
    type: CART_ADD_ITEM,
    payload: productItem
  }
}

export const setCartStatus = () => {
  return {
    type: SHOW_CART
  }
}

