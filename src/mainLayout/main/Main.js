import { Container, Grid } from "@material-ui/core";
import React from "react";
import ItemList from "../../pages/itemsList";
import Sidebar from "../sidebar/sidebar";

function Main({ loading, page, items, onChange }) {
  return (
    <Container maxWidth="lg" component="main" style={{ margin: "100px auto" }}>
      <Grid container spacing={3} justify="center">
        <Grid item md={4} sm={9} style={{ minWidth: "30%" }}>
          <Sidebar />
        </Grid>
        <ItemList
          loading={loading}
          page={page}
          onChange={onChange}
          items={items}
        />
      </Grid>
    </Container>
  );
}

export default Main;
