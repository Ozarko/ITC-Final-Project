import { AUTH_LOGIN_FAIL, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from "../../types/auth/authTypes";


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const initialState = {
    loading: true,
    userInfo: userInfoFromStorage,
    login: false
  }

  const authUserReducer = (state = initialState, action) => {
    switch(action.type) {
      case AUTH_LOGIN_REQUEST: 
      return {
        ...state,
        loading: true,
      }
      case AUTH_LOGIN_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
          login: true
        }
      case AUTH_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      default: 
       return state
    }
  } 