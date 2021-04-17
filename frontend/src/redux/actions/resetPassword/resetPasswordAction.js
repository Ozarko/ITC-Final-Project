import axios from "axios";
import { FORGOT_PASSWORD_REQUEST_FAIL, FORGOT_PASSWORD_REQUEST_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS } from "../../types/resetPassword/ResetPasswordTypes";

const forgotPassword = (email) => async (dispatch) => {
  try {
    const {data} = await axios.post("/users/forgot", {email});

    dispatch({
      type: FORGOT_PASSWORD_REQUEST_SUCCESS,
      payload: data.msg
    });

  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

const resetPassword = (password, token) => async (dispatch) => {
  
  try {
    await axios.post(
      "/users/reset",{ password }, {
        headers: { Authorization: token }
      }
    );

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
    });

  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export { forgotPassword, resetPassword};
