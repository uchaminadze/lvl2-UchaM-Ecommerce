import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { ADMIN_PAGE, LOGIN_USER } from "../routes";
import { selectLoggedIn } from "../store/user/userSelector";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Redirect from={`${ADMIN_PAGE}`} to={`${LOGIN_USER}`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
