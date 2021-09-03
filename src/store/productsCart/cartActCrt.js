import { SET_CART, SET_PRODUCT_CART } from "./cartActConst";

export const setProdCart = (productsCart) => {
  return {
    type: SET_PRODUCT_CART,
    productsCart,
  };
};

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};
