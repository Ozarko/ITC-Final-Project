import { AUTH_ACTIVATE_EMAIL_FAIL, AUTH_ACTIVATE_EMAIL_SUCCESS, AUTH_GOOGLE_LOGIN_FAIL, AUTH_GOOGLE_LOGIN_REQUEST, AUTH_GOOGLE_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_REGISTER_FAIL, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS, GET_USER_TOKEN } from "../../types/auth/authTypes";
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
    localStorage.setItem('firstLogin', true)
  } catch (error) {
    dispatch({
      type: AUTH_LOGIN_FAIL,
      payload: error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const getAccessToken = () => async (dispatch) => {
  const { data } = await axios.post("/users/refresh_token", null);
  dispatch({
    type: GET_USER_TOKEN,
    payload: data.access_token,
  });
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
      payload: error.response.data.msg
          ? error.response.data.msg
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
        error.responce && error.responce.data.msg
          ? error.responce.data.msg
          : error.message,
    });
  }
};


export const loginWithGoogle = (responce) => async (dispatch) => {
  try {

    dispatch({
      type: AUTH_GOOGLE_LOGIN_REQUEST,
    });

    const { data } = await axios.post("/users/google_login", {
      tokenId: responce.tokenId,
    });
    
    dispatch(getAccessToken());

    dispatch({
      type: AUTH_GOOGLE_LOGIN_SUCCESS,
      payload: data.msg,
    });

    dispatch(getAccessToken());

    localStorage.setItem("firstLogin", true);

  } catch (error) {
    dispatch({
      type: AUTH_GOOGLE_LOGIN_FAIL,
      payload: error.response.data.msg
        ? error.response.data.msg
        : error.message,
    });
  }
};
