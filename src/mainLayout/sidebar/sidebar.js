import { Grid } from "@material-ui/core";
import React from "react";
import Condition from "./filters/condition";
import Filters from "./filters/filters";
import Reviews from "./filters/review";
import Subcategories from "./subcategories";

function Sidebar() {
  return (
    <Grid item md={4} sm={9} style={{ minWidth: "30%" }}>
      <Grid container>
        <Subcategories />
        <Filters />
      </Grid>
    </Grid>
  );
}

export default Sidebar;
