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
import Main from "./mainLayout/Main";
import { SINGLE_ITEM } from "./routes";
import ItemHeader from "./pages/header/header";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      img: `${Image}`,
      title: "Blue denim t-shirt",
      price: "100$",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
    },
    {
      id: 2,
      img: `${Image2}`,
      title: "Black denim t-shirt",
      price: "200$",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
    },
    {
      id: 3,
      img: `${Image3}`,
      title: "Grey sweater",
      price: "300$",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
    },
    {
      id: 4,
      img: `${Image4}`,
      title: "Red hoodie",
      price: "400$",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
    },
    {
      id: 5,
      img: `${Image}`,
      title: "Blue denim t-shirt 2",
      price: "500$",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
    },
    {
      id: 6,
      img: `${Image3}`,
      title: "Grey sweater 2",
      price: "600$",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio sunt modi non dolor nam repudiandae eveniet accusamus nobis, quos sit debitis vel vero, in tenetur dolorem corporis neque praesentium.",
    },
  ]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Main items={items} />
          </Route>
          <Route path="/product/:price/:title">
            <ItemHeader />
            <SingleItem items={items} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
