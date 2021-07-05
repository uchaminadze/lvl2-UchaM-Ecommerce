import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import UseStyles from "./footerClasses";

function FooterHeadBlue() {
  const classes = UseStyles();
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <Box style={{ backgroundColor: "#1266F1" }}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          color: "white",
          alignItems: "center",
          minHeight: "8vh",
        }}
      >
        <Grid item md={7} xs={12} className={classes.main}>
          <Typography variant="p">
            Get connected with us on social networks!
          </Typography>
        </Grid>

        <Grid item md={5} xs={12} className={classes.main}>
          <Link
            href="#"
            style={{ display: "flex", gap: "1rem", float: "right" }}
          >
            {[
              "fab fa-facebook-f",
              "fab fa-twitter",
              "fab fa-google-plus-g",
              "fab fa-linkedin-in",
              "fab fa-instagram",
            ].map((value) => {
              return (
                <Icon
                  style={{ fontSize: "1rem", color: "white" }}
                  className={value}
                ></Icon>
              );
            })}
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}

export default FooterHeadBlue;
