import React, { useEffect, useState } from "react";

import BackgroundImg from "./backgroundImg/backgroundImg";
import ItemTitle from "./itemTitle";
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
