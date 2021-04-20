import { FORGOT_PASSWORD_REQUEST_FAIL, FORGOT_PASSWORD_REQUEST_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS} from "../../types/resetPassword/ResetPasswordTypes";

const resetPassword = {
  forgotReqError: "",
  forgotReqSuccess: "",
  resetError: "",
  resetSuccess: false,
};

const resetPasswordReducer = (state = resetPassword, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        forgotReqSuccess: action.payload,
      };
    case FORGOT_PASSWORD_REQUEST_FAIL:
      return {
        ...state,
        forgotReqSuccess: false,
        forgotReqError: action.payload,
      };
    case RESET_PASSWORD_SUCCESS: 
      return {
        ...state,
        resetSuccess: true,
      };
    case RESET_PASSWORD_FAIL: 
      return {
        ...state,
        resetError: action.payload,
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
