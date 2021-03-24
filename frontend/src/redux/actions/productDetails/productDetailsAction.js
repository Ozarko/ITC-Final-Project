import axios from "axios";
import { DOWNLOAD_COMPLETE, DOWNLOAD_ERROR, DOWNLOAD_STARTED } from "../../types/download/downloadTypes";
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../../types/productDetails/productDetailsTypes";

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DOWNLOAD_STARTED });
    dispatch({type: PRODUCT_DETAILS_REQUEST})
    const { data } = await axios.get(`/api/products/${id}`);
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
      dispatch({type: DOWNLOAD_COMPLETE})
  } catch (error) {
    dispatch({
      type: DOWNLOAD_ERROR,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};
