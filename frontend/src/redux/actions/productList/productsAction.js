import axios from 'axios'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../../types/productList/productListTypes';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('/api/products');
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.responce && error.responce.data.message ? error.responce.data.message : error.message
    })
  }
}