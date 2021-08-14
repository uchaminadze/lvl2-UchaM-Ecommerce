import { SET_CART, SET_COUNTER, SET_PAGE, SET_PROD } from "./prodActConst";

const initialState = {
  products: [],
  isLogginIn: false,
  page: 1,
  counter: 0,
  cart: 0,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROD: {
      return {
        ...state,
        products: action.products,
      };
    }

    case SET_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }

    case SET_COUNTER: {
      return {
        ...state,
        counter: action.counter,
      };
    }

    case SET_CART: {
      return {
        ...state,
        cart: action.cart,
      };
    }
    default:
      return state;
  }
}
