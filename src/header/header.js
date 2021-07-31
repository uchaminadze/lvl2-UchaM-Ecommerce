import React, { createContext, useContext, useEffect, useState } from "react";
import { CreateContext } from "../store/context";

import BackgroundImg from "./backgroundImg/backgroundImg";
import ItemTitle from "./itemTitle";
import Nav from "./nav/nav";

function Header() {
  const { data } = useContext(CreateContext);

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
