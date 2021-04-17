import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { productListReducer } from "./productList/productListReducer";
import { productDetailsReducer } from "./productDetails/productDetailsReducer";
import authUserReducer from "./auth/authReducer";
import userReducer from "./user/userReducer";
import resetPasswordReducer from "./resetPassword/resetPasswordReduser";



const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  auth: authUserReducer,
  user: userReducer,
  resetPssw: resetPasswordReducer
});

export default rootReducer