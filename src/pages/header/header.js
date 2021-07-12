import React from "react";
import ItemTitle from "./itemTitle";
import Nav from "./nav/nav";

function ItemHeader() {
  return (
    <div>
      <header>
        <Nav />
        <ItemTitle />
      </header>
    </div>
  );
}

export default ItemHeader;
