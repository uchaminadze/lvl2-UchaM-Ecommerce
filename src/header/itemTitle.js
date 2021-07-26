import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import UseStyles from "../header/headerClasses";
import { LOGIN_USER, REGISTER_USER } from "../routes";
import { CreateContext } from "../store/IsMainContext";

export default function ItemTitle() {
  const context = useContext(CreateContext);

  const classes = UseStyles();
  return (
    <>
      <Container maxWidth="xs" className={classes.itemTitle}>
        <Grid container item md={12} justify="center">
          {context.data.isRegistered ? (
            <Typography variant="h3">Sign in</Typography>
          ) : (
            <Typography variant="h3">Sign up</Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}
