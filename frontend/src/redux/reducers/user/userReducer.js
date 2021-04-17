import { UPDATE_USER_DETAILS_FAIL, UPDATE_USER_DETAILS_REQUEST, UPDATE_USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGOUT } from "../../types/user/userTypes";

const initialState = {
  loading: false,
  user: {},
  isAdmin: false,
  error: '',
  userUpdSuccess: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAdmin: action.isAdmin || false,
        error: "",
      };
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userUpdSuccess: action.payload
      };
    case UPDATE_USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;