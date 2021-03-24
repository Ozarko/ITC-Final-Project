import axios from 'axios'
import { DOWNLOAD_COMPLETE, DOWNLOAD_ERROR, DOWNLOAD_STARTED } from '../../types/download/downloadTypes';
import { PRODUCT_LIST_SUCCESS } from '../../types/productList/productListTypes';

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
      type: DOWNLOAD_ERROR,
      payload: error.responce && error.responce.data.message ? error.responce.data.message : error.message
    })
  }
}