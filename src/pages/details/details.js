import { Grid, Link as MLINK } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Description from "./description";
import Information from "./information";
import Reviews from "./reviews";
import { HOME_PAGE, SINGLE_ITEM } from "../../routes";

function Details({ items }) {
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
          to={`${SINGLE_ITEM}/${items.id}/${items.price}/${items.title}${HOME_PAGE}`}
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
          to={`${SINGLE_ITEM}/${items.id}/${items.price}/${items.title}${HOME_PAGE}info`}
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
          to={`${SINGLE_ITEM}/${items.id}/${items.price}/${items.title}${HOME_PAGE}rev`}
        >
          <MLINK underline="none">REVIEWS (1)</MLINK>
        </Grid>
      </Grid>
      <Switch>
        <Route
          exact
          path={`${SINGLE_ITEM}/${items.id}/${items.price}/${items.title}${HOME_PAGE}`}
        >
          <Description items={items} />
        </Route>
        <Route
          path={`${SINGLE_ITEM}/${items.id}/${items.price}/${items.title}${HOME_PAGE}info`}
        >
          <Information />
        </Route>
        <Route
          path={`${SINGLE_ITEM}/${items.id}/${items.price}/${items.title}${HOME_PAGE}rev`}
        >
          <Reviews />
        </Route>
      </Switch>
    </Router>
  );
}

export default Details;
