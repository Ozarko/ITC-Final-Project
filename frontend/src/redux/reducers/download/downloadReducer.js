import { DOWNLOAD_COMPLETE, DOWNLOAD_ERROR, DOWNLOAD_STARTED } from "../../types/download/downloadTypes";


const initialState = {
}

export const downloadReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_STARTED:
      return {
        loading: true,
      };
    case DOWNLOAD_COMPLETE:
      return {
        loading: false,
      };
    case DOWNLOAD_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
