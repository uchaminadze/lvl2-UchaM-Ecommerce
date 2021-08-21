import React, { useEffect, useState } from "react";
import UserImage from "./itemTitle";

import Nav from "./nav/nav";

function Header() {
  return (
    <div>
      <header>
        <Nav />
        <UserImage />
      </header>
    </div>
  );
}

export default Header;
