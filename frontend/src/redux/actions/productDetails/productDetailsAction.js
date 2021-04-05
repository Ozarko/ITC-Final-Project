import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../../types/productDetails/productDetailsTypes";

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST})
    const { data } = await axios.get(`/api/products/${id}`);
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};
