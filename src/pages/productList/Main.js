import { Container, Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import ItemList from "../../pages/singleItem/itemsList";
import { CreateContext } from "../../store/context";
import Sidebar from "../../layout/mainlayout/sidebar/sidebar";
import MainLayout from "../../layout/mainlayout/mainLayout";

function Main() {
  return (
    <>
      <MainLayout>
        <Container
          maxWidth="lg"
          component="main"
          style={{ margin: "100px auto" }}
        >
          <Grid container spacing={3} justify="center">
            <Grid item md={4} sm={9} style={{ minWidth: "30%" }}>
              <Sidebar />
            </Grid>
            <Grid item md={8} sm={9}>
              <ItemList />
            </Grid>
          </Grid>
        </Container>
      </MainLayout>
    </>
  );
}

export default Main;
