import { Container, Grid } from "@material-ui/core";
import React from "react";
import ItemList from "../pages/itemsList";
import Sidebar from "./sidebar/sidebar";
// import { SINGLE_ITEM } from "../routes";

// import UseStyles from "./mainClasses";

function Main({ items }) {
  return (
    <Container maxWidth="lg" component="main" style={{ margin: "100px auto" }}>
      <Grid container spacing={3} justify="center">
        <Grid item md={4} sm={9} style={{ minWidth: "30%" }}>
          <Sidebar />
        </Grid>
        <ItemList items={items} />
      </Grid>
    </Container>
  );
}

export default Main;
