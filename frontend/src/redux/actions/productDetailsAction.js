import {
  DOWNLOAD_COMPLETE,
  DOWNLOAD_STARTED,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../types/types";

import axios from "axios";

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DOWNLOAD_STARTED });
    const { data } = await axios.get(`/api/products/${id}`);
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
      dispatch({type: DOWNLOAD_COMPLETE})
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
