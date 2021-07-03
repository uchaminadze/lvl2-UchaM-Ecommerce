import React from "react";
import BackgroundImg from "./backgroundImg/backgroundImg";
import Nav from "./nav/nav";

function Header() {
  return (
    <div>
      <header>
        <Nav />
        <BackgroundImg />
      </header>
    </div>
  );
}

export default Header;
