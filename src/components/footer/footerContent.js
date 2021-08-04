import {
  Box,
  Container,
  Grid,
  Link,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import React from "react";

function FooterContent() {
  return (
    <Grid item style={{ minHeight: "30vh", backgroundColor: "#2E2E2E" }}>
      <Container
        maxWidth="lg"
        style={{
          minHeight: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Grid container style={{ padding: "50px 0 0 0" }}>
          <Grid item md={3} xs={12}>
            <Typography variant="h5">About me</Typography>
            <Typography variant="p" style={{ marginTop: "20px" }}>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>

          <Grid item md={3} xs={12}>
            <Typography variant="h5">Products</Typography>
            <List href="#">
              {[
                "MDBootstrap",
                "MDWordPress",
                "BrandFlow",
                "Bootstrap Angular",
              ].map((value) => {
                return (
                  <ListItem style={{ padding: "8px 0 0 0" }}>
                    <Link href="#" underline="hover" style={{ color: "white" }}>
                      {value}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid>

          <Grid item md={3} xs={12}>
            <Typography variant="h5">Useful links</Typography>
            <List href="#">
              {[
                "Your Account",
                "Become an Affiliate",
                "Shipping Rates",
                "Help",
              ].map((value) => {
                return (
                  <ListItem style={{ padding: "8px 0 0 0" }}>
                    <Link href="#" underline="hover" style={{ color: "white" }}>
                      {value}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid>

          <Grid item md={3} xs={12}>
            <Typography variant="h5">Contacts</Typography>
            <List href="#">
              {[
                "New York, Avenue Street 10",
                "042 876 836 908",
                "company@example.com",
                "Monday - Friday: 10-17",
              ].map((value) => {
                return (
                  <ListItem style={{ padding: "8px 0 0 0" }}>
                    <ListItemText>{value}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
      <Box
        style={{
          minHeight: "50px",
          backgroundColor: "#252525",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle2" style={{ color: "white" }}>
          © 2020 Copyright:
          <Link href="#" style={{ color: "white", marginLeft: "0.5rem" }}>
            MDBootstrap.com
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
}

export default FooterContent;
