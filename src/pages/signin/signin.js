import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import SigninLayout from "../../layout/signinLayout/signinLayout";

import SigninForm from "./signinForm";

export default function Signin() {
  return (
    <SigninLayout>
      <Container maxWidth="sm">
        <SigninForm />
      </Container>
    </SigninLayout>
  );
}
