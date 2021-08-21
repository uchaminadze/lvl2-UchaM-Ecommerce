import React, { createRef, useEffect, useRef, useState } from "react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  CardMedia,
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
    marginTop: "30px",
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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //   const selectedFile = useSelector(selectUploadFile);
  const classes = UseStyles();
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // const fileInput = inputRef;
  // const fileInput = document.getElementById("avatar");
  // const formData = new FormData();
  // const changeHandler = () => {

  // };
  const [file, setFiles] = useState(null);
  const inputRef = useRef();
  console.log(file);
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
      let formData = new FormData();
      formData.append("avatar", values.avatar);

      Api.userUpdate({
        id: user.id,
        name: values.name,
        avatar: formData,
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
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Grid container md={12} sm={12} xs={12}>
          <label htmlFor="name">Name:</label>
          <Field
            name="name"
            type="text"
            as={TextField}
            fullWidth
            variant="outlined"
            label={`${user.name}`}
            className={classes.inputField}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <input
            type="file"
            name="avatar"
            onChange={(event) => {
              formik.setFieldValue("avatar", event.target.files[0]);
            }}
          />

          {/* <Field
            name="avatar"
            id="avatar"
            type="file"
            as={TextField}
            // inputRef={inputRef}
            fullWidth
            className={classes.inputField}
            // inputRef={inputRef}
            // onChange={(e) => setFiles(e.target.value)}

            // onChange={(e) => setFiles(e.target.files[0])}
          />
          {formik.touched.avatar && formik.errors.avatar ? (
            <div>{formik.errors.avatar}</div>
          ) : null} */}

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
