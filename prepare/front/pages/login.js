import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <AppLayout>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </AppLayout>
  );
};

export default Login;
