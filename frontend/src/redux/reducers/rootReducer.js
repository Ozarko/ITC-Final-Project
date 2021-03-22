import { combineReducers } from "redux";
import {productListReducer} from './productListReducer';

const rootReducer = combineReducers({
  productListReducer,
});

export default rootReducer