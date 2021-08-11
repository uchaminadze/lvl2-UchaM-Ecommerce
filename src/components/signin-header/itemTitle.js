import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import UseStyles from "../signin-header/headerClasses";
// import { LOGIN_USER, REGISTER_USER } from "../routes";

export default function ItemTitle() {
  const classes = UseStyles();
  return (
    <>
      <Container maxWidth="xs" className={classes.itemTitle}>
        <Grid container item md={12} justify="center">
          <Typography variant="h3">Sign in</Typography>
        </Grid>
      </Container>
    </>
  );
}
