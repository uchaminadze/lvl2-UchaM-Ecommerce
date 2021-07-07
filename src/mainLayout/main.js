import { Container, Grid } from "@material-ui/core";
import React from "react";
import ItemList from "./items/itemsList";
import Sidebar from "./sidebar/sidebar";
// import UseStyles from "./mainClasses";

function Main() {
  return (
    <Container maxWidth="lg">
      <main style={{ margin: "100px 0" }}>
        <Grid container spacing={3} justify="center">
          <Sidebar />
          <ItemList />
        </Grid>
      </main>
    </Container>
  );
}

export default Main;
