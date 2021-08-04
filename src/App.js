import React, { useContext, useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { ADMIN_PAGE, LOGIN_USER, REGISTER_USER, SINGLE_ITEM } from "./routes";
import PrivateRoute from "./components/privateRoute";
import { CreateContext } from "./store/context";
import MainLayout from "./layout/mainlayout/mainLayout";
import SingleItem from "./pages/singleItem/singleItem";
import Admin from "./pages/admin/admin";
import Register from "./pages/registration/register";
import Main from "./pages/productList/Main";
import Signin from "./pages/signin/signin";
import Api from "./api";

function App() {
  const history = useHistory();
  let userToken = localStorage.getItem("token");
  let { data, setData } = useContext(CreateContext);

  useEffect(() => {
    Api.getUserInfo().then((dataa) => {
      if (userToken) {
        setData({ ...data, isLoggedin: true, userData: dataa });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path={`${SINGLE_ITEM}/:id`} component={SingleItem} />
          <PrivateRoute path={`${ADMIN_PAGE}`} component={Admin} />
          <Route path={`${REGISTER_USER}`} component={Register} exact />
          <Route path={`${LOGIN_USER}`} component={Signin} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
