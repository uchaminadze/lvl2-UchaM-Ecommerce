import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import RegisterLayout from "../../layout/registerLayout/registerLayout";

import RegisterForm from "./registerForm";

export default function Register() {
  return (
    <RegisterLayout>
      <Container maxWidth="sm">
        <RegisterForm />
      </Container>
    </RegisterLayout>
  );
}
