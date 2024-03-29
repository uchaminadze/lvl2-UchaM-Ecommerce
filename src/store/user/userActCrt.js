import {
  LOGGED_IN,
  LOGGIN_IN,
  SET_TOKEN,
  SET_USER,
  UPLOAD_FILE,
} from "./userActConst";

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
export const LoggedIn = (isLoggedIn) => {
  return {
    type: LOGGED_IN,
    isLoggedIn,
  };
};
export const LogginIn = (isLogginIn) => {
  return {
    type: LOGGIN_IN,
    isLogginIn,
  };
};
export const UploadFile = (uploadfile) => {
  return {
    type: UPLOAD_FILE,
    uploadfile,
  };
};
