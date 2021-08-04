import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Button, Grid } from "@material-ui/core";
import ModalForm from "./modalForm";

const UseStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid #01579b",
    boxShadow: theme.shadows[5],
    borderRadius: 15,
    borderTopRightRadius: 5,

    padding: "2rem 3rem",
  },

  closeBtn: {
    color: "#01579b",
    cursor: "pointer",
  },
  button: {
    border: "2px solid #4caf50",
    color: "#4caf50",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#4caf50",
      color: "white",
    },
  },
}));

export default function ProductModal() {
  const classes = UseStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify="flex-end">
      <Button
        onClick={handleOpen}
        variant="outlined"
        className={classes.button}
      >
        NEW
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <Grid container justify="flex-end">
              <CloseIcon onClick={handleClose} className={classes.closeBtn} />
            </Grid>
            <ModalForm />
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
}
