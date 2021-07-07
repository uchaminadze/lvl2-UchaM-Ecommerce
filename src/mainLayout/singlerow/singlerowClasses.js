import { makeStyles } from "@material-ui/core";

const UseStyles = makeStyles(() => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },

  secondary: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  viewButton: {
    border: "none",
    color: "black",
    borderRadius: "5px",
    padding: "9px",
  },
}));

export default UseStyles;
