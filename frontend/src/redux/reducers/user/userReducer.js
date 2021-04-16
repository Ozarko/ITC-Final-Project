import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../../types/user/userTypes";

const user = {
  loading: false,
  user: {},
  isAdmin: false
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAdmin: action.isAdmin
      }
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;