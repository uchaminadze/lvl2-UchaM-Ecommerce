import { makeStyles } from "@material-ui/core";

const UseStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxShadow: "none",
  },
  input: {
    // marginLeft: theme.spacing(1),
    // flex: 1,
    width: "100%",
  },
  iconButton: {
    padding: 10,
  },
  checkbox: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  review: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "& > .fas": {
      color: "blue",
    },
  },

  priceInputs: {
    // display: "flex",
    // flexWrap: "wrap",
    width: "100%",
  },
  margin: {
    margin: theme.spacing(0, 2, 2, 0),
    width: "160px",
  },

  priceRange: {
    width: "90%",
  },

  rangeSlider: {
    margin: "50px 0 0 12px",
  },
}));

export default UseStyles;
