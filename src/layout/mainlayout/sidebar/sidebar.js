import { Grid } from "@material-ui/core";
import React from "react";
import Filters from "../../../components/sidebar-filters/filters";
import Subcategories from "../../../components/sidebar-filters/subcategories/subcategories";

function Sidebar() {
  return (
    <>
      <Subcategories />
      <Filters />
    </>
  );
}

export default Sidebar;
