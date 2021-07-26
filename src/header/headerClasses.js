import { fade, makeStyles } from "@material-ui/core/styles";
import Image from "../images/background.jpg";

const UseStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white",
      color: "black",
    },
  },

  whiteBackground: {
    backgroundColor: "white",
  },

  main2: {
    backgroundColor: "white",
    color: "black",
  },
  signup: {
    width: 150,
    border: "3px solid white",
    borderRadius: "50px",
    color: "white",
  },

  signup2: {
    width: 150,
    borderRadius: "50px",
    color: "skyblue",
    border: "3px solid skyblue",
  },

  navlinks: {
    color: "white",
  },

  navlinks2: {
    color: "black",
  },
  overlay: {
    width: "100%",
    minHeight: 400,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerBackground: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: 400,
  },

  itemTitle: {
    height: "190px",
    marginTop: "70px",
    display: "flex",
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default UseStyles;
