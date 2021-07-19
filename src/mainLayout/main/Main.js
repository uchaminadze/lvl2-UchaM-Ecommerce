import { Container, Grid } from "@material-ui/core";
import React from "react";
import ItemList from "../../pages/itemsList";
import Sidebar from "../sidebar/sidebar";

function Main({ currentItems, loading, setCurrentPage }) {
  return (
    <Container maxWidth="lg" component="main" style={{ margin: "100px auto" }}>
      <Grid container spacing={3} justify="center">
        <Grid item md={4} sm={9} style={{ minWidth: "30%" }}>
          <Sidebar />
        </Grid>
        <ItemList
          currentItems={currentItems}
          loading={loading}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
    </Container>
  );
}

export default Main;
