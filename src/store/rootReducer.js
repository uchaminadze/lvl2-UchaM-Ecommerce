import { combineReducers } from "redux";
import user from "./user/userReducer";
import products from "./products/prodReducer";
import productsCart from "./productsCart/cartReducer";
import singleProduct from "./singleProduct/singleReducer";

const appReducer = combineReducers({
  user,
  products,
  productsCart,
  singleProduct,
});

export default appReducer;
