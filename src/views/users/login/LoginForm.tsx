import React from 'react';
import InputField from "../../../components/utils/InputField.tsx";

const LoginForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 p-6">
      <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>

        <div className="space-y-4">

          <InputField id="username" label="Usuário" required />
          <InputField id="password" label="Senha" type="password" required />

          <button
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded transition-colors">
            Entrar
          </button>

          <p className="text-center text-sm text-gray-400">
            Não tem uma conta? <a href="/cadastro" className="text-blue-400 hover:underline">Crie uma agora</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;