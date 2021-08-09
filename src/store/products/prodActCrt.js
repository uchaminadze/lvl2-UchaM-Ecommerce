import { SET_PROD } from "./prodActConst";

export const setProd = (products) => {
  return {
    type: SET_PROD,
    products,
  };
};
