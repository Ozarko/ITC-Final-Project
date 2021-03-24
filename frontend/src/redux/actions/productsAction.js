import {
  DOWNLOAD_COMPLETE,
  DOWNLOAD_STARTED,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../types/types";
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: DOWNLOAD_STARTED})
    const {data} = await axios.get('/api/products');
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
      dispatch({type: DOWNLOAD_COMPLETE})
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.responce && error.responce.data.message ? error.responce.data.message : error.message
    })
  }
}