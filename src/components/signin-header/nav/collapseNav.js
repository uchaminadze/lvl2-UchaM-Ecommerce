import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Collapse from "@material-ui/core/Collapse";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button, Hidden, Link, ListItem } from "@material-ui/core";
import { List } from "@material-ui/core";
import React from "react";
import UseStyles from "../headerClasses";

function CollapseNav({ open }) {
  const classes = UseStyles();
  return (
    <>
      <Hidden mdUp>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton color="inherit">
              <Badge
                badgeContent={1}
                color="secondary"
                style={{ margin: "0 20px" }}
              ></Badge>
              <ShoppingCartIcon />
            </IconButton>

            <ListItem
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              <Link href="#" className={classes.navlinks2}>
                Shop
              </Link>
              <Link href="#" className={classes.navlinks2}>
                Contact
              </Link>
              <Link href="#" className={classes.navlinks2}>
                Sign in
              </Link>
            </ListItem>

            <Button className={classes.signup2} variant="outlined">
              SIGN UP
            </Button>
          </List>
        </Collapse>
      </Hidden>
    </>
  );
}

export default CollapseNav;
