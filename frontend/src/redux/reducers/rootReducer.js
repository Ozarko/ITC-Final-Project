import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { downloadReducer } from "./download/downloadReducer";
import { productListReducer } from "./productList/productListReducer";
import { productDetailsReducer } from "./productDetails/productDetailsReducer";
import { userLoginReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  download: downloadReducer,
  cart: cartReducer,
  userLogin: userLoginReducer
});

export default rootReducer