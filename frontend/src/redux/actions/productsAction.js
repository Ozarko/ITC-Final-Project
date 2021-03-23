import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_SUCCESS} from "../types/types"
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('/api/products');
    setTimeout(()=> {
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: data
      })
    }, 2000)
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.responce && error.responce.data.message ? error.responce.data.message : error.message
    })
  }
}