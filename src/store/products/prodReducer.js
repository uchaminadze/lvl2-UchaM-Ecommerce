import { SET_PROD } from "./prodActConst";

const initialState = {
  products: [],
  isLogginIn: false,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROD: {
      return {
        ...state,
        products: action.products,
      };
    }
    default:
      return state;
  }
}
