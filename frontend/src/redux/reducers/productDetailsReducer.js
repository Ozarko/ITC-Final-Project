import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../types/types";

const initialState = {
  ploading: true,
  product: {},
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        ploading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ploading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        ploading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
