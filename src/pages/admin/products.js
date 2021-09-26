import {
  AppBar,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Loader from "../../components/loader/loader";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";

import Api from "../../api";
import ProductModal from "../../components/modal/modal";
import ProductTable from "./productTable";

export default function Products({ classes, handleDrawerToggle }) {
  const [loading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Api.getProductList()
      .then((resp) => setItems(resp))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Products
          </Typography>
        </Toolbar>
      </AppBar>

      <Loader isLoading={loading}>
        <Container maxWidth="lg">
          <Grid container md={12} sm={12} xs={12}>
            <ProductModal />
            <ProductTable items={items} classes={classes} />
          </Grid>
        </Container>
      </Loader>
    </div>
  );
}
