import { makeStyles } from "@material-ui/core";

const UseStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxShadow: "none",
  },
  input: {
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
    "& > .fas, .far": {
      color: "blue",
      fontSize: "1rem",
    },
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem",
  },

  priceInputs: {
    display: "flex",
    // flexWrap: "wrap",
    width: "100%",
  },
  margin: {
    margin: theme.spacing(0, 2, 2, 0),
    width: "100%",
  },

  priceRange: {
    width: "90%",
  },

  rangeSlider: {
    margin: "50px 0 0 12px",
  },
}));

export default UseStyles;
