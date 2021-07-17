import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleItemLeft from "./singleItemLeft";
import { useParams } from "react-router-dom";
import SingleItemRight from "./singleItemRight";
import Details from "./details/details";
import Loader from "../helpers/loader/loader";
import Api from "../api";

function SingleItem() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  useEffect(() => {
    setIsLoading(true);
    Api.setSingleItem(id)
      .then((res) => setItems(res))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Loader isLoading={loading}>
      <ScrollToTopOnMount />
      <Container maxWidth="lg" component="main">
        <Grid container>
          {items && (
            <Grid container spacing={3} justify="center">
              <Grid item md={6} xs={12}>
                <SingleItemLeft items={items} />
              </Grid>
              <Grid item md={6} xs={12}>
                <SingleItemRight items={items} />
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid container>
          <Grid container item md={12} xs={12} style={{ margin: "50px 0" }}>
            <Details items={items} />
          </Grid>
        </Grid>
      </Container>
    </Loader>
  );
}

export default SingleItem;
