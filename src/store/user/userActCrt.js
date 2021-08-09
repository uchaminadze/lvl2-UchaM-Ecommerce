import { SET_TOKEN, SET_USER } from "./userActConst";

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};
export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};
