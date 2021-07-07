import { Grid } from "@material-ui/core";
import React from "react";
import Condition from "./filters/condition";
import Filters from "./filters/filters";
import Reviews from "./filters/review";
import Subcategories from "./subcategories";

function Sidebar() {
  return (
    <>
      <Subcategories />
      <Filters />
    </>
  );
}

export default Sidebar;
