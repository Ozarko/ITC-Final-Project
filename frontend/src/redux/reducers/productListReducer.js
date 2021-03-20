import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_SUCCESS } from "../types/types"

const initialState = {
  products: []
}

export const productListReducer = (state = initialState, action) => {
  switch(action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case PRODUCT_SUCCESS: 
      return {
        loading: false,
        products: action.payload
      }
    case PRODUCT_LIST_FAIL: 
      return {
        loading: false,
        error: action.payload
      }
    default: 
      return state
  }
}