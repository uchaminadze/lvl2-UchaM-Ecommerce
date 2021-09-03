import { SET_PAGE, SET_PROD } from "./prodActConst";

export const setProd = (products) => {
  return {
    type: SET_PROD,
    products,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};
