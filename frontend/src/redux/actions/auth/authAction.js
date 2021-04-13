import { AUTH_ACTIVATE_EMAIL_FAIL, AUTH_ACTIVATE_EMAIL_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_REGISTER_FAIL, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS } from "../../types/auth/authTypes";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_LOGIN_REQUEST,
    });

    const {data} = await axios.post(
      "/users/login",
      { email, password },
    );

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: AUTH_LOGIN_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};


export const registration = (firstName, lastName, phone, email, password) => async (
  dispatch
) => {
  try {
    dispatch({
      type: AUTH_REGISTER_REQUEST,
    });

    const {data} = await axios.post("/users/register", {
      firstName,
      lastName,
      phone,
      email,
      password,
    });

    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: AUTH_REGISTER_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

export const activateEmail = (activation_token) => async (dispatch) => {
  try {
    const {data} = await axios.post("/users/activation", { activation_token });
    dispatch({
      type: AUTH_ACTIVATE_EMAIL_SUCCESS,
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ACTIVATE_EMAIL_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

