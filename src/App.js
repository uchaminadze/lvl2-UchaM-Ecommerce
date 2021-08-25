import React, { useContext, useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import {
  ADMIN_PAGE,
  CART_PAGE,
  LOGIN_USER,
  REGISTER_USER,
  SINGLE_ITEM,
  USER_PAGE,
} from "./routes";
import PrivateRoute from "./components/routes/privateRoute";
import MainLayout from "./layout/mainlayout/mainLayout";
import SingleItem from "./pages/singleItem/singleItem";
import Admin from "./pages/admin/admin";
import Register from "./pages/registration/register";
import Main from "./pages/productList/Main";
import Signin from "./pages/signin/signin";
import Api from "./api";
import { LoggedIn, setToken, setUser } from "./store/user/userActCrt";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "./store/user/userSelector";
import { SET_USER } from "./store/user/userActConst";
import { loginUser } from "./store/user/userAct";
import UserUpdate from "./pages/userUpdate/userUpdate";
import Cart from "./pages/cart/cart";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  let userToken = localStorage.getItem("token");

  const userInfo = () => {
    dispatch(loginUser());
  };

  useEffect(() => {
    if (userToken) {
      userInfo();
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path={`${ADMIN_PAGE}`} component={Admin} exact />
          <PrivateRoute path={`${CART_PAGE}`} component={Cart} exact />
          <Route path="/" component={Main} exact />
          <Route path={`${SINGLE_ITEM}/:id`} component={SingleItem} exact />
          <Route path={`${REGISTER_USER}`} component={Register} exact />
          <Route path={`${LOGIN_USER}`} component={Signin} exact />
          <Route path={`${USER_PAGE}`} component={UserUpdate} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
