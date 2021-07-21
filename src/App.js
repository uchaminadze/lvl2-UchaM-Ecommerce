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
import { HOME_PAGE, SINGLE_ITEM } from "./routes";
import ItemHeader from "./pages/header/header";
import Api from "./api";
import Admin from "./admin/admin";
import SigninHeader from "./registration/header/header";
import Signin from "./registration/signin";
import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
// import Signin from "./registration/signin";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [paginate, setPaginate] = useState({
    page: 1,
    total: 100,
    limit: 20,
  });

  const changePage = (p) => {
    setIsLoading(true);
    Api.getProductList(`products?limit${paginate.limit}&page=${paginate.page}`)
      .then((resp) => {
        setPaginate({
          // ...page,
          page: p,
        });

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
    Api.getProductList("products")
      .then((resp) => setItems(resp))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Main
              items={items}
              loading={loading}
              total={paginate.total}
              limit={paginate.limit}
              onChange={(paginate) => {
                changePage(paginate);
              }}
            />
            <Footer />
          </Route>
          <Route path={`${SINGLE_ITEM}/:id`}>
            <ItemHeader />
            <SingleItem items={items} />
            <Footer />
          </Route>
          {/* <Route path="/admin">
            <Admin />
          </Route> */}
          <PublicRoute
            restricted={true}
            component={Signin}
            path="/signin"
            exact
          />
          <PrivateRoute component={Admin} path="/dashboard" exact />
        </Switch>
      </Router>
    </div>
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
