import { Grid, Link as MLINK } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Description from "./description";
import Information from "./information";
import Reviews from "./reviews";

function Details({ price, title, id }) {
  return (
    <Router>
      <Grid container item md={12} style={{ borderBottom: "1px solid grey" }}>
        <Grid
          container
          item
          md={4}
          sm={4}
          xs={4}
          justify="center"
          component={Link}
          to={`/product/${id}/${price}/${title}/`}
        >
          <MLINK underline="none">DESCRIPTION</MLINK>
        </Grid>
        <Grid
          container
          item
          md={4}
          sm={4}
          xs={4}
          justify="center"
          component={Link}
          to={`/product/${id}/${price}/${title}/info`}
        >
          <MLINK underline="none">INFORMATION</MLINK>
        </Grid>
        <Grid
          container
          item
          md={4}
          sm={4}
          xs={4}
          justify="center"
          component={Link}
          to={`/product/${id}/${price}/${title}/rev`}
        >
          <MLINK underline="none">REVIEWS (1)</MLINK>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path={`/product/${id}/${price}/${title}/`}>
          <Description price={price} />
        </Route>
        <Route path={`/product/${id}/${price}/${title}/info`}>
          <Information />
        </Route>
        <Route path={`/product/${id}/${price}/${title}/rev`}>
          <Reviews />
        </Route>
      </Switch>
    </Router>
  );
}

export default Details;
