import { SET_CART, SET_PRODUCT_CART } from "./cartActConst";

const initialState = {
  productsCart: [],
};

export default function productsCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_CART: {
      return {
        ...state,
        productsCart: [...state.productsCart, ...action.productsCart],
      };
    }
    default:
      return state;
  }
}
