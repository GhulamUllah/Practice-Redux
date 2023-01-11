import Alerts from "./Alert";
import { combineReducers } from "redux";
import authfun from "./auth";
import productReducer from "./productreducer";

export default combineReducers({
  Auth: authfun,
  alert: Alerts,
  product: productReducer,
});
