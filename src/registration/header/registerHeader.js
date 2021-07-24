import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

function RegisterHeader() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        style={{ height: "200px", marginTop: "70px" }}
        alignItems="center"
        justify="center"
      >
        <Typography variant="h4">Sign up</Typography>
      </Grid>
    </Container>
  );
}

export default RegisterHeader;
