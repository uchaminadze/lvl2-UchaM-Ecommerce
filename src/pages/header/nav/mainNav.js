import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { List } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { Button, Hidden, Icon, Link, ListItem } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import UseStyles from "../headerClasses";
import NavDropdown from "./navdropdown/navDropdown";

function MainNav({ navButton, navLinks, handleClick }) {
  const classes = UseStyles();
  return (
    <>
      <Toolbar>
        <Icon
          className="fab fa-mdb"
          style={{ fontSize: "3rem", width: "100px" }}
        />
        <div className={classes.grow} />
        <div>
          <Hidden smDown>
            <List style={{ display: "flex" }}>
              <IconButton color="inherit">
                <Badge
                  badgeContent={1}
                  color="secondary"
                  style={{ margin: "0 20px" }}
                ></Badge>
                <ShoppingCartIcon />
              </IconButton>

              <ListItem style={{ display: "flex", gap: "1rem" }}>
                {/* <NavDropdown /> */}
                <Link href="#" className={navLinks}>
                  Shop
                </Link>
                <Link href="#" className={navLinks}>
                  Contact
                </Link>
                <Link href="#" className={navLinks}>
                  Sign in
                </Link>
              </ListItem>

              <Button className={classes.signup} variant="outlined">
                SIGN UP
              </Button>
            </List>
          </Hidden>

          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>
      </Toolbar>
    </>
  );
}

export default MainNav;
