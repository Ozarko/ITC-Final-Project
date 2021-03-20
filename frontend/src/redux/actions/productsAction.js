import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_SUCCESS, PRODUCY_LIST_FAIL } from "../types/types"
import axios from 'axios'


export const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('/api/products');
    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.responce && error.responce.data.message ? error.responce.data.message : error.message
    })
  }
}