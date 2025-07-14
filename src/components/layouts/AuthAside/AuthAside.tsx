import React from 'react';

interface AuthAsideProps {
  title?: string;
  subtitle?: string;
  logoSrc?: string;
}

const AuthAside: React.FC<AuthAsideProps> = ({
                                               title = "Seja bem-vindo",
                                               subtitle = '"Organize suas sessões de RPG com estilo."',
                                               logoSrc = "/logo.png",
                                             }) => {
  return (
    <div className="relative flex items-center justify-center bg-gray-950 text-white p-6">
      <div className="absolute top-4 left-4 text-lg font-medium text-white">
        {title}
      </div>
      <div className="text-center">
        <img src={logoSrc} alt="Logo do Projeto" className="max-w-200 max-h-200 mx-auto" />
        <hr className="my-4 border-t border-gray-700 w-16 mx-auto" />
        <p className="text-sm text-gray-400 italic">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthAside;