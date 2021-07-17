import { Container, Grid } from "@material-ui/core";
import React from "react";
import ItemList from "../pages/itemsList";
import Sidebar from "./sidebar/sidebar";

function Main({ items, loading }) {
  return (
    <Container maxWidth="lg" component="main" style={{ margin: "100px auto" }}>
      <Grid container spacing={3} justify="center">
        <Grid item md={4} sm={9} style={{ minWidth: "30%" }}>
          <Sidebar />
        </Grid>
        <ItemList items={items} loading={loading} />
      </Grid>
    </Container>
  );
}

export default Main;
