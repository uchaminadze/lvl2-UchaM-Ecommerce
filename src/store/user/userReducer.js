import {
  LOGGED_IN,
  LOGGIN_IN,
  SET_TOKEN,
  SET_USER,
  UPLOAD_FILE,
} from "./userActConst";

const initialState = {
  user: {},
  isLogginIn: false,
  isLoggedIn: false,
  token: "",
  uploadfile: null,
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
    case UPLOAD_FILE:
      return {
        ...state,
        uploadfile: action.uploadfile,
      };
    default:
      return state;
  }
}
