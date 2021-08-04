import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Box, CardMedia, List, Popover, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {
  Button,
  Hidden,
  Icon,
  Link as MLINK,
  ListItem,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext, useEffect, useState } from "react";
import UseStyles from "../headerClasses";
import NavDropdown from "./navdropdown/navDropdown";
import { Link, useHistory } from "react-router-dom";
import { CreateContext } from "../../../store/context";
import { LOGIN_USER } from "../../../routes";

function MainNav({ navButton, navLinks, handleClick }) {
  let userToken = localStorage.getItem("token");
  const { data, setData } = useContext(CreateContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    if (!!userToken) {
      return setData({ ...data, isLoggedin: false, userData: {} });
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
                <MLINK href="#" className={navLinks}>
                  Shop
                </MLINK>
                <MLINK href="#" className={navLinks}>
                  Contact
                </MLINK>
                {userToken ? (
                  <>
                    <MLINK href="#" className={navLinks}>
                      {`${data.userData.name}`}
                    </MLINK>
                    <MLINK href="#" onClick={onClick}>
                      <CardMedia
                        image={`${data.userData.avatar}`}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                      />
                    </MLINK>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={onClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Box style={{ padding: "0.5rem" }}>
                        <MLINK
                          // href="#"
                          component={Link}
                          onClick={logOut}
                        >
                          Logout
                        </MLINK>
                      </Box>
                    </Popover>
                  </>
                ) : (
                  <>
                    {data.userData && (
                      <>
                        <MLINK
                          component={Link}
                          to={`${LOGIN_USER}`}
                          href="#"
                          className={navLinks}
                        >
                          Sign in
                        </MLINK>
                        <Button
                          component={Link}
                          to="/register"
                          className={navButton}
                          variant="outlined"
                        >
                          SIGN UP
                        </Button>
                      </>
                    )}
                  </>
                )}
              </ListItem>
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
