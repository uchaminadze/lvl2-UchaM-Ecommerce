import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

function SigninHeader() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        style={{ height: "200px", marginTop: "70px" }}
        alignItems="center"
        justify="center"
      >
        <Typography variant="h4">Sign in</Typography>
      </Grid>
    </Container>
  );
}

export default SigninHeader;
