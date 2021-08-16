import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { LOGIN_USER } from "../routes";
import { selectLoggedIn } from "../store/user/userSelector";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={`${LOGIN_USER}`} />
      }
    />
  );
};

export default PrivateRoute;
