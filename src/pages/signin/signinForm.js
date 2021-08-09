import React, { useContext, useEffect, useState } from "react";
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
import { Redirect, Route, useHistory } from "react-router-dom";
import Api from "../../api";
import { setToken } from "../../store/user/userActCrt";

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

export default function SigninForm() {
  const [loading, setIsLoading] = useState(false);
  const userToken = localStorage.getItem("token");
  const history = useHistory();
  const classes = UseStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // checkbox: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(
          3,
          <Typography variant="subtitle2" className={classes.required}>
            Must be 3 characters or more
          </Typography>
        )
        .required(
          <Typography variant="subtitle2" className={classes.required}>
            Required
          </Typography>
        ),
      password: Yup.string()
        .min(
          1,
          <Typography variant="subtitle2" className={classes.required}>
            Must be 1 characters or more
          </Typography>
        )
        .required(
          <Typography variant="subtitle2" className={classes.required}>
            Required
          </Typography>
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      Api.logInUser({ email: values.email, password: values.password })
        .then((data) => {
          // let exp = data.token.expires_in;
          // if (exp) {
          //   console.log(exp);
          //   localStorage.clear();
          //   setData({ ...data, isLoggedin: false, userData: {} });
          // }
          setToken(localStorage.setItem("token", data.token.access_token));
          history.push("/");
        })
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
            name="email"
            type="email"
            as={TextField}
            fullWidth
            variant="outlined"
            label="Email"
            className={classes.inputField}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <Field
            name="password"
            type="password"
            as={TextField}
            fullWidth
            variant="outlined"
            label="Password"
            className={classes.inputField}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <Grid container justify="space-between">
            <Grid item>
              <Field name="checkbox" type="checkbox" value="checkbox" />
              <label>Remember me</label>
              {formik.touched.checkbox && formik.errors.checkbox ? (
                <div>{formik.errors.checkbox}</div>
              ) : null}
            </Grid>
            <Grid item>
              <Link href="#">Forgot password</Link>
            </Grid>
          </Grid>

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
