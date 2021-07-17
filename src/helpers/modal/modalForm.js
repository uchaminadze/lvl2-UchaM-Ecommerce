import React from "react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Grid,
  makeStyles,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";

const UseStyles = makeStyles(() => ({
  inputField: {
    padding: "1rem 0.5rem",
    width: "100%",
    outlineStyle: "none",
    border: "none",
    border: "1px solid grey",
    borderRadius: "10px",
  },

  required: {
    marginBottom: "20px",
    color: "red",
  },

  button: {
    marginTop: "10px",
  },
}));

export default function ModalForm() {
  const classes = UseStyles();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      image: "",
      categories: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
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
      price: Yup.string()
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
      description: Yup.string()
        .min(
          10,
          <Typography variant="subtitle2" className={classes.required}>
            Must be 10 characters or more
          </Typography>
        )
        .required(
          <Typography variant="subtitle2" className={classes.required}>
            Required
          </Typography>
        ),

      categories: Yup.string()
        .min(
          2,
          <Typography variant="subtitle2" className={classes.required}>
            Must be 2 characters or more
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

      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: formik.values.title,
          price: formik.values.price,
          description: formik.values.description,
          // image: formik.values.image,
          categories: formik.values.categories,
        }),
      })
        .then((res) => res.json(res.status === 200 && alert("congrats")))
        .then((json) => console.log(json));
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Grid container md={12} sm={12} xs={12}>
          <Grid item md={12} sm={12} xs={12}>
            <label htmlFor="title">Title</label>
            <Field name="title" className={classes.inputField} />
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <label htmlFor="price">Price</label>
            <Field name="price" className={classes.inputField} />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              as={TextareaAutosize}
              rowsMin={10}
              className={classes.inputField}
            />
            {formik.touched.description && formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : null}
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <label htmlFor="categories">Categories</label>
            <Field name="categories" as="select" className={classes.inputField}>
              <option>Choose a category</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelry">Jewelry</option>
              <option value="electronics">Electronics</option>
            </Field>
            {formik.touched.categories && formik.errors.categories ? (
              <div>{formik.errors.categories}</div>
            ) : null}
          </Grid>

          <Grid container justify="flex-end">
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
