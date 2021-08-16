import React, { createRef, useEffect, useRef, useState } from "react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Grid,
  Link,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Api from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { selectUploadFile, selectUser } from "../../store/user/userSelector";
import { UploadFile } from "../../store/user/userActCrt";

const UseStyles = makeStyles(() => ({
  inputField: {
    marginBottom: "30px",
  },

  required: {
    marginBottom: "20px",
    color: "red",
  },

  button: {
    marginTop: "10px",
  },
}));

export default function UserUpdateForm() {
  const userId = useSelector(selectUser);
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  //   const selectedFile = useSelector(selectUploadFile);
  const classes = UseStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      avatar: "",
    },
    // validationSchema: Yup.object({
    //   email: Yup.string()
    //     .min(
    //       3,
    //       <Typography variant="subtitle2" className={classes.required}>
    //         Must be 3 characters or more
    //       </Typography>
    //     )
    //     .required(
    //       <Typography variant="subtitle2" className={classes.required}>
    //         Required
    //       </Typography>
    //     ),
    //   password: Yup.string()
    //     .min(
    //       1,
    //       <Typography variant="subtitle2" className={classes.required}>
    //         Must be 1 characters or more
    //       </Typography>
    //     )
    //     .required(
    //       <Typography variant="subtitle2" className={classes.required}>
    //         Required
    //       </Typography>
    //     ),
    // }),

    onSubmit: (values) => {
      console.log(values);
      let data = new FormData();
      data.append("avatar", values.avatar);
      Api.userUpdate({
        id: userId.id,
        name: values.name,
        // avatar: values.avatar,
      })
        // .then((data) => {
        //   console.log(data);
        //   // localStorage.setItem("token", data.token);
        //   // history.push(`${LOGIN_USER}`);
        //   history.push("/login");
        // })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Grid container md={12} sm={12} xs={12}>
          <Field
            name="name"
            type="name"
            as={TextField}
            fullWidth
            variant="outlined"
            label="Name"
            className={classes.inputField}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <Field
            name="avatar"
            type="file"
            as={TextField}
            fullWidth
            onChange={(event) => {
              formik.setFieldValue("avatar", event.target.files[0]);
            }}
            className={classes.inputField}
          />
          {formik.touched.avatar && formik.errors.avatar ? (
            <div>{formik.errors.avatar}</div>
          ) : null}

          <Grid container justify="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
