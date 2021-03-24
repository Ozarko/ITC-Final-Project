import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { downloadReducer } from "./download/downloadReducer";
import { productListReducer } from "./productList/productListReducer";
import { productDetailsReducer } from "./productDetails/productDetailsReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  download: downloadReducer,
  cart: cartReducer
});

export default rootReducer