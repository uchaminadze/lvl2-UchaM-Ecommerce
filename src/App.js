import React from "react";
import "./App.scss";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./mainLayout/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
