import { SET_CART, SET_COUNTER, SET_PAGE, SET_PROD } from "./prodActConst";

const initialState = {
  products: [],
  isLogginIn: false,
  page: 1,
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

    default:
      return state;
  }
}
