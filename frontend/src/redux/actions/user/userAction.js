import axios from "axios";
import { UPDATE_USER_DETAILS_FAIL, UPDATE_USER_DETAILS_REQUEST, UPDATE_USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../../types/user/userTypes";

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
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

const updateUser = ({token, values}) => async (dispatch, getState) => {

  const {
    firstName, lastName, phone, email, password
  } = values;
  try {
    dispatch({
      type: UPDATE_USER_DETAILS_REQUEST,
    });

    const {user: {user}} = getState()

    await axios.patch(
      "/users/update",
      {
        firstName: firstName ? firstName : user.firstName,
        lastName: lastName ? lastName : user.lastName,
        phone: phone ? phone : user.phone,
        email: email ? email : user.email,
      },
      {
        headers: { Authorization: token },
      }
    );

    if(password) {
      await axios.post(
        "/users/reset",
        { password },
        {
          headers: { Authorization: token },
        }
      );
    }

    dispatch(fetchUser(token))

    dispatch({
      type: UPDATE_USER_DETAILS_SUCCESS,
      payload: 'Ваші особисті дані було змінено !'
    })
  } catch (error) {
    dispatch({
      type: UPDATE_USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export { fetchUser, updateUser };