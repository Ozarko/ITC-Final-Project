import { AUTH_ACTIVATE_EMAIL_FAIL, AUTH_ACTIVATE_EMAIL_SUCCESS, AUTH_CLEAR_ERROR, AUTH_GOOGLE_LOGIN_FAIL, AUTH_GOOGLE_LOGIN_REQUEST, AUTH_GOOGLE_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_LOGOUT_FAIL, AUTH_REGISTER_FAIL, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS, GET_USER_TOKEN } from "../../types/auth/authTypes";

  const initialState = {
    loading: false,
    isLogged: false,
    isRegister: false,
    msg: "",
    token: "",
    error: '',
    googleError: ''
  };

  const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH_LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case AUTH_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isLogged: true,
          msg: action.payload,
        };
      case AUTH_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case AUTH_REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case AUTH_REGISTER_SUCCESS:
        return {
          ...state,
          msg: action.payload,
          loading: false,
          isRegister: true,
        };
      case AUTH_REGISTER_FAIL:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case AUTH_ACTIVATE_EMAIL_SUCCESS:
        return {
          ...state,
          msg: action.payload,
        };
      case AUTH_ACTIVATE_EMAIL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      case AUTH_CLEAR_ERROR:
        return {
          ...state,
          error: "",
        };
      case GET_USER_TOKEN:
        return {
          ...state,
          token: action.payload
        }
      case AUTH_LOGOUT:
        return {
          ...initialState
        }
      case AUTH_LOGOUT_FAIL:
        return {
          ...state,
          error: action.payload
        }
      case AUTH_GOOGLE_LOGIN_REQUEST:
        return {
          ...state,
          loading: true
        }
      case AUTH_GOOGLE_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isLogged: true,
          msg: action.payload,
        };
      case AUTH_GOOGLE_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          isLogged: false,
          googleError: action.payload,
        };
      default:
        return state;
    }
  }

export default authUserReducer;