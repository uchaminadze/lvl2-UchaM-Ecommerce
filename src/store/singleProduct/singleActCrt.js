import { SET_SINGLE_PROD } from "./singleActConst";

export const setSingleProd = (singleProduct) => {
  return {
    type: SET_SINGLE_PROD,
    singleProduct,
  };
};
