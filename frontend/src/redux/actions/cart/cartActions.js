import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, SHOW_CART } from "../../types/cart/cartTypes"

export const addProductToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/products/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      description: data.description,
      productType: data.productType,
      countInStock: data.countInStock,
      categories: data.categories,
      likes: data.likes,
      qty
    }
  })
  localStorage.setItem('productInCart', JSON.stringify(getState().cart.productInCart))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })
  localStorage.setItem(
    "productInCart",
    JSON.stringify(getState().cart.productInCart)
  );
}


export const setCartStatus = () => {
  return {
    type: SHOW_CART
  }
}

