import axios from "axios";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../../types/user/userTypes";

const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get("/users/infor", {
      headers: { Authorization: token },
    });

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
      isAdmin: data.isAdmin
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default fetchUser