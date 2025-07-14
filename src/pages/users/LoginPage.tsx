import React from 'react';
import LoginForm from "../../views/users/login/LoginForm.tsx";
import AuthAside from "../../components/layouts/AuthAside/AuthAside.tsx";

const LoginPage: React.FC = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <LoginForm/>
      <AuthAside
        title="Seja bem-vindo"
        subtitle='"Entre para continuar sua jornada."'
      />
    </div>
  );
};

export default LoginPage;
