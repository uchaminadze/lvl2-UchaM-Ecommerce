import { ErrorMessage, Field, Form, FormikProvider } from "formik";
import React from "react";
import "./user.scss";

export default function UserData({ formik }) {
  return (
    <div>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />

          <label htmlFor="userName">Username:</label>
          <Field type="text" name="userName" id="userName" />
          <ErrorMessage name="userName" />

          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" />

          <label htmlFor="firstName">First Name:</label>
          <Field type="text" name="firstName" id="firstName" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" name="lastName" id="lastName" />
          <ErrorMessage name="lastName" />

          <label htmlFor="city">City:</label>
          <Field type="text" name="city" id="city" />
          <ErrorMessage name="city" />

          <label htmlFor="street">Street:</label>
          <Field type="text" name="street" id="street" />
          <ErrorMessage name="street" />

          <label htmlFor="number">Number:</label>
          <Field type="number" name="number" id="number" />
          <ErrorMessage name="number" />

          <label htmlFor="zipcode">Zipcode:</label>
          <Field type="text" name="zipcode" id="zipcode" />
          <ErrorMessage name="zipcode" />

          <label htmlFor="lat">Latitude:</label>
          <Field type="text" name="lat" id="lat" />
          <ErrorMessage name="lat" />

          <label htmlFor="long">Longitude:</label>
          <Field type="text" name="long" id="long" />
          <ErrorMessage name="long" />

          <label htmlFor="phone">Phone:</label>
          <Field
            type="tel"
            name="phone"
            id="phone"
            placeholder="ex: 531-12-34-56"
          />
          <ErrorMessage name="phone" />

          <button type="submit" disabled={formik.isSubmitting}>
            Submit
          </button>
        </Form>
      </FormikProvider>
    </div>
  );
}
