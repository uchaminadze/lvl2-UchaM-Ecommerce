import React, { useEffect, useState } from "react";
import ItemTitle from "./itemTitle";
import Nav from "./nav/nav";

function Header() {
  return (
    <div>
      <header>
        <Nav />
        <ItemTitle />
      </header>
    </div>
  );
}

export default Header;
