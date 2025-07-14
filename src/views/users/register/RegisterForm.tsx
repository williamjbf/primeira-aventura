import InputField from "../../../components/utils/InputField.tsx";

const RegisterForm: React.FC = () => {

  return (
    <div className="flex items-center justify-center bg-gray-800 p-6">
      <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Criar Conta</h2>

        <div className="space-y-4">
          <InputField id="username" label="Usuário" required/>
          <InputField id="email" label="E-mail" type="email" required/>
          <InputField id="senha" label="Senha" type="password" required/>
          <InputField id="confirmPassword" label="Confirmar Senha" type="password" required/>

          <button
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded transition-colors">
            Registrar
          </button>

          <p className="text-center text-sm text-gray-400">
            Já tem uma conta? <a href="/login" className="text-blue-400 hover:underline">Voltar para login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;