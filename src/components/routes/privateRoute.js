import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { LOGIN_USER, USER_PAGE } from "../../routes";
import { selectLoggedIn, selectUser } from "../../store/user/userSelector";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isLoggedIn ? (
          <Redirect to={`${LOGIN_USER}`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
