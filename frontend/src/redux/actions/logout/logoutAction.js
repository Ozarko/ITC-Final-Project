import axios from "axios";
import { AUTH_LOGOUT, AUTH_LOGOUT_FAIL } from "../../types/auth/authTypes";
import { USER_LOGOUT } from "../../types/user/userTypes";

export const logout = () => async (dispatch) => {
  try {
    await axios.get("/users/logout");
    localStorage.removeItem("firstLogin");
    dispatch({
      type: AUTH_LOGOUT,
    });
    dispatch({
      type: USER_LOGOUT
    })
  } catch (error) {
    dispatch({
      type: AUTH_LOGOUT_FAIL,
      payload:
        error.responce && error.responce.data.msg
          ? error.responce.data.msg
          : error.message,
    });
  }
};
