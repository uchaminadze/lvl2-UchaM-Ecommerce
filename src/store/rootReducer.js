import { combineReducers } from "redux";
import user from "./user/userReducer";
import products from "./products/prodReducer";

const appReducer = combineReducers({
  user,
  products,
});

export default appReducer;
