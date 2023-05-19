import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import SingupForm from "../components/SignupForm";

const Signup = () => {
  const onSubmit = useCallback(() => {}, []);
  return (
    <AppLayout>
      <SingupForm />
    </AppLayout>
  );
};

export default Signup;
