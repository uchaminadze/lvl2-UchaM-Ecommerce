import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link as MLINK } from "@material-ui/core";
import SingleItem from "../src/pages/SingleItem";
import Image from "./images/shirt.jpg";
import Image2 from "./images/shirt2.jpg";
import Image3 from "./images/shirt3.jpg";
import Image4 from "./images/shirt4.jpg";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./mainLayout/main/Main";
import {
  ADMIN_PAGE,
  HOME_PAGE,
  LOGIN_USER,
  REGISTER_USER,
  SINGLE_ITEM,
} from "./routes";
import ItemHeader from "./pages/header/header";
import Api from "./api";
import Admin from "./admin/admin";
import SigninHeader from "./registration/header/signinHeader";
import Signin from "./registration/signin";
import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
import Register from "./registration/register";
import { CreateContext } from "./store/IsMainContext";
// import Signin from "./registration/signin";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  let [data, setData] = useState({
    isMain: true,
    isRegistered: false,
    isLoggedin: false,
    userToken: "",
    userData: {},
  });

  console.log(data);

  const changePage = (event, value) => {
    setIsLoading(true);
    Api.getProductList(`products?limit=${limit}&page=${value}`)
      .then((resp) => {
        setPage(value);
        setItems(resp);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    Api.getProductList(`products?limit=${limit}&page=${page}`)
      .then((resp) => setItems(resp))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <CreateContext.Provider value={{ data, setData }}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Main
                items={items}
                loading={loading}
                page={page}
                onChange={changePage}
              />
              <Footer />
            </Route>
            <Route path={`${SINGLE_ITEM}/:id`}>
              <ItemHeader />
              <SingleItem items={items} />
              <Footer />
            </Route>
            <Route path={`${ADMIN_PAGE}`} component={Admin} />
            <Route
              component={Register}
              // restricted={true}
              path={`${REGISTER_USER}`}
              exact
            />
            <Route component={Signin} path={`${LOGIN_USER}`} exact />
          </Switch>
        </Router>
      </div>
    </CreateContext.Provider>
  );
}

export default App;

// {
//   id: 1,
//   img: `${Image}`,
//   title: "Blue denim t-shirt",
//   price: "100$",
//   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
// },
// {
//   id: 2,
//   img: `${Image2}`,
//   title: "Black denim t-shirt",
//   price: "200$",
//   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
// },
// {
//   id: 3,
//   img: `${Image3}`,
//   title: "Grey sweater",
//   price: "300$",
//   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
// },
// {
//   id: 4,
//   img: `${Image4}`,
//   title: "Red hoodie",
//   price: "400$",
//   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
// },
// {
//   id: 5,
//   img: `${Image}`,
//   title: "Blue denim t-shirt 2",
//   price: "500$",
//   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
// },
// {
//   id: 6,
//   img: `${Image3}`,
//   title: "Grey sweater 2",
//   price: "600$",
//   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
// },
