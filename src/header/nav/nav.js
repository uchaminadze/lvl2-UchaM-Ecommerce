import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { loadCSS } from "fg-loadcss";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import Collapse from "@material-ui/core/Collapse";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import UseStyles from "../headerClasses";
import {
  Button,
  Hidden,
  Icon,
  Link,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { List } from "@material-ui/core";

function Nav() {
  const classes = UseStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
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
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        classes={{
          root: classes.main,
        }}
      >
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
                  <Link href="#" style={{ color: "white" }}>
                    Shop
                  </Link>
                  <Link href="#" style={{ color: "white" }}>
                    Contact
                  </Link>
                  <Link href="#" style={{ color: "white" }}>
                    Sign in
                  </Link>
                </ListItem>

                <Button
                  style={{
                    width: 150,
                    color: "white",
                    border: "3px solid white",
                    borderRadius: "50px",
                  }}
                  variant="outlined"
                >
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
              style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
            >
              <Link href="#" style={{ color: "black" }}>
                Shop
              </Link>
              <Link href="#" style={{ color: "black" }}>
                Contact
              </Link>
              <Link href="#" style={{ color: "black" }}>
                Sign in
              </Link>
            </ListItem>

            <Button
              style={{
                width: 100,
                color: "black",
                border: "3px solid black",
                borderRadius: "50px",
              }}
              variant="outlined"
            >
              SIGN UP
            </Button>
          </List>
        </Collapse>
      </AppBar>
    </div>
  );
}

export default Nav;
