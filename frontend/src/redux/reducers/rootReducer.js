import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { productListReducer } from "./productList/productListReducer";
import { productDetailsReducer } from "./productDetails/productDetailsReducer";
// import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./user/userReducer";
import authUserReducer from "./auth/authReducer";



const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: authUserReducer
});

export default rootReducer