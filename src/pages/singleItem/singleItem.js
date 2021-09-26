import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleItemLeft from "./singleItemLeft";
import { useParams } from "react-router-dom";
import SingleItemRight from "./singleItemRight";
import Details from "./details/details";
import Loader from "../../components/loader/loader";
import Api from "../../api";
import ItemLayout from "../../layout/itemLayout/itemLayout";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleProd } from "../../store/singleProduct/singleSelector";
import { setSingleProd } from "../../store/singleProduct/singleActCrt";

function SingleItem() {
  const { id } = useParams();
  // const [items, setItems] = useState([]);
  let item = useSelector(selectSingleProd);
  const dispatch = useDispatch();
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
      .then((data) => dispatch(setSingleProd(data)))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <ItemLayout>
        <Loader isLoading={loading}>
          <ScrollToTopOnMount />

          <Container maxWidth="lg" component="main">
            <Grid container>
              {item && (
                <Grid container spacing={3} justify="center">
                  <Grid item md={6} xs={12}>
                    <SingleItemLeft />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <SingleItemRight />
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid container>
              <Grid container item md={12} xs={12} style={{ margin: "50px 0" }}>
                <Details />
              </Grid>
            </Grid>
          </Container>
        </Loader>
      </ItemLayout>
      {console.log(item)}
    </>
  );
}

export default SingleItem;
