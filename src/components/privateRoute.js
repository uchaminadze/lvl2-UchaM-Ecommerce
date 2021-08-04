import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ADMIN_PAGE, LOGIN_USER } from "../routes";
import { CreateContext } from "../store/context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let userToken = localStorage.getItem("token");
  // const
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        userToken ? (
          <Component {...props} />
        ) : (
          <Redirect from={`${ADMIN_PAGE}`} to={`${LOGIN_USER}`} />
        )
      }
    />
  );
};

export default PrivateRoute;
