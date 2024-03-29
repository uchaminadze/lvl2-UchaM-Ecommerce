import {
  SET_CART,
  SET_COUNTER,
  SET_PAGE,
  SET_PROD,
  SET_PRODUCT_CART,
} from "./prodActConst";

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

export const setCounter = (counter) => {
  return {
    type: SET_COUNTER,
    counter,
  };
};

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

export const setProdCart = (productCart) => {
  return {
    type: SET_PRODUCT_CART,
    productCart,
  };
};
