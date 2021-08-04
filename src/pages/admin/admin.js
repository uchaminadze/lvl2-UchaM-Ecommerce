import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import List from "@material-ui/core/List";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import CategoryIcon from "@material-ui/icons/Category";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Grid } from "@material-ui/core";
import Products from "./products";
import Users from "./user";
import Categories from "./categories";
import { ADMIN_CATEGORIES, ADMIN_PAGE, ADMIN_USERS } from "../../routes";
import AdminLayout from "../../layout/adminLayout/adminLayout";

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#607d8b",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  drawerLink: {
    color: "white",
    padding: "10px",
  },

  table: {
    marginTop: "20px",
  },

  drawerIcon: {
    marginRight: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#263238",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Admin(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <div className={classes.toolbar} />
      <Grid container justify="center">
        <Link
          component={Button}
          fullWidth
          variant=""
          to={`${ADMIN_PAGE}`}
          className={classes.drawerLink}
        >
          <LocalGroceryStoreIcon className={classes.drawerIcon} /> Products
        </Link>
      </Grid>
      <Grid container justify="center">
        <Link
          component={Button}
          fullWidth
          to={`${ADMIN_USERS}`}
          className={classes.drawerLink}
        >
          <GroupIcon className={classes.drawerIcon} /> Users
        </Link>
      </Grid>
      <Grid container justify="center">
        <Link
          component={Button}
          fullWidth
          to={`${ADMIN_CATEGORIES}`}
          className={classes.drawerLink}
        >
          <CategoryIcon className={classes.drawerIcon} /> Categories
        </Link>
      </Grid>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AdminLayout>
      <div className={classes.root}>
        <CssBaseline />

        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Router>
            <Switch>
              <Route path={`${ADMIN_CATEGORIES}`}>
                <Categories
                  classes={classes}
                  handleDrawerToggle={handleDrawerToggle}
                />
              </Route>
              <Route path={`${ADMIN_USERS}`}>
                <Users
                  classes={classes}
                  handleDrawerToggle={handleDrawerToggle}
                />
              </Route>
              <Route path={`${ADMIN_PAGE}`}>
                <Products
                  classes={classes}
                  handleDrawerToggle={handleDrawerToggle}
                />
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
    </AdminLayout>
  );
}

Admin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Admin;
