import { Grid } from "@material-ui/core";
import React from "react";
import ItemList from "./items/itemList";
import Sidebar from "./sidebar/sidebar";
// import UseStyles from "./mainClasses";

function Main() {
  return (
    <div>
      <main style={{ maxWidth: "70%", margin: "100px auto" }}>
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <Sidebar />
          <ItemList />
        </Grid>
      </main>
    </div>
  );
}

export default Main;
