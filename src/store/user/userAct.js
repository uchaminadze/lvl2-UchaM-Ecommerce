import { useDispatch } from "react-redux";
import Api from "../../api";
import { LogginIn, setToken, setUser } from "./userActCrt";

export const loginUser = (email, password) => (dispatch, getState) => {
  Api.getUserInfo({ email, password }).then((data) => {
    console.log(data);
    dispatch(setUser(data));
  });
  // .finally(() => {
  //   dispatch(LogginIn(false));
  // });
};
