import { combineReducers } from "redux";
import {productListReducer} from "./productListReducer";
import {productDetailsReducer} from './productDetailsReducer'
import { downloadReducer } from "./downloadReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  download: downloadReducer
});

export default rootReducer