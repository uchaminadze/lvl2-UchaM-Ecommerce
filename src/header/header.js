import React, { createContext, useContext, useState } from "react";
import { CreateContext } from "../store/IsMainContext";

import BackgroundImg from "./backgroundImg/backgroundImg";
import ItemTitle from "./itemTitle";
import Nav from "./nav/nav";

function Header() {
  const context = useContext(CreateContext);

  console.log(context.data);
  return (
    <div>
      <header>
        <Nav />
        {context.data.isMain ? <BackgroundImg /> : <ItemTitle />}
      </header>
    </div>
  );
}

export default Header;
