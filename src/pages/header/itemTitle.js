import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

function ItemTitle() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          style={{ height: "200px", marginTop: "70px" }}
          alignItems="center"
          justify="center"
        >
          <Typography variant="h4">Product Page</Typography>
        </Grid>
      </Container>
    </>
  );
}

export default ItemTitle;
