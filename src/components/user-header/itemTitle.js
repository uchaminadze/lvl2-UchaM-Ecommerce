import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSelector";
import UseStyles from "../user-header/headerClasses";
// import { LOGIN_USER, REGISTER_USER } from "../routes";

export default function UserImage() {
  const user = useSelector(selectUser);
  const classes = UseStyles();
  return (
    <>
      <Container maxWidth="xs" className={classes.itemTitle}>
        <Grid container item md={12} justify="center">
          <CardMedia image={user.avatar} style={{ width: 200, height: 200 }} />
        </Grid>
      </Container>
    </>
  );
}
