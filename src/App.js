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
import { setProdCart } from "./store/productsCart/cartActCrt";
import { selectProdCart } from "./store/productsCart/cartSelector";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  let userToken = localStorage.getItem("token");
  let cart = useSelector(selectProdCart);

  const userInfo = () => {
    dispatch(loginUser());
  };

  useEffect(() => {
    if (userToken) {
      userInfo();
    }
    let docCookie = document.cookie;
    if (docCookie.length > 0) {
      let parsedCookie = JSON.parse(docCookie);
      console.log(parsedCookie);
      console.log(cart);
      dispatch(setProdCart(parsedCookie));
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path={`${ADMIN_PAGE}`} component={Admin} />
          <PrivateRoute path={`${CART_PAGE}`} component={Cart} />
          <Route path={`${SINGLE_ITEM}/:id`} component={SingleItem} exact />
          <Route path={`${REGISTER_USER}`} component={Register} exact />
          <Route path={`${LOGIN_USER}`} component={Signin} exact />
          <Route path={`${USER_PAGE}`} component={UserUpdate} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
