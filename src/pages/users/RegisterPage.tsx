import React from 'react';
import RegisterForm from "../../views/users/register/RegisterForm.tsx";
import AuthAside from "../../components/layouts/AuthAside/AuthAside.tsx";

const RegisterPage: React.FC = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <RegisterForm />
      <AuthAside
        title="Bem-vindo à aventura"
        subtitle='"Crie sua conta e comece a rolar os dados."'
      />
    </div>
  );
};

export default RegisterPage;