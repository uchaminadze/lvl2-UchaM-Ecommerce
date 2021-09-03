import { SET_SINGLE_PROD } from "./singleActConst";

const initialState = {
  singleProduct: [],
};

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PROD: {
      return {
        ...state,
        singleProduct: action.singleProduct,
      };
    }

    default:
      return state;
  }
}
