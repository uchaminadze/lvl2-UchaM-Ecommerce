import { useDispatch } from "react-redux";
import Api from "../../api";
import { LoggedIn, LogginIn, setToken, setUser } from "./userActCrt";

export const loginUser = (email, password) => (dispatch) => {
  Api.getUserInfo({ email, password }).then((data) => {
    console.log(data);
    dispatch(setUser(data));
    dispatch(LoggedIn(true));
  });
};
