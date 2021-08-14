import { LOGGED_IN, LOGGIN_IN, SET_TOKEN, SET_USER } from "./userActConst";

const initialState = {
  user: {},
  isLogginIn: false,
  isLoggedIn: false,
  token: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case LOGGIN_IN:
      return {
        ...state,
        isLogginIn: action.isLogginIn,
      };
    default:
      return state;
  }
}
