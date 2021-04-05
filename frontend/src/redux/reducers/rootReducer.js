import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { productListReducer } from "./productList/productListReducer";
import { productDetailsReducer } from "./productDetails/productDetailsReducer";
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer
});

export default rootReducer