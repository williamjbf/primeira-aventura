import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

type ButtonVariant = 'subscribe' | 'back';

interface TableActionButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
}

export const TableActionButton: React.FC<TableActionButtonProps> = ({ variant, onClick }) => {
  const baseClasses =
    'transition-colors px-4 py-2 rounded font-medium text-sm text-white flex items-center gap-2 shadow-sm';

  switch (variant) {
    case 'subscribe':
      return (
        <button onClick={onClick} className={`${baseClasses} bg-blue-600 hover:bg-blue-700`}>
          Inscrever-se
        </button>
      );
    case 'back':
      return (
        <button onClick={onClick} className={`${baseClasses} bg-gray-700 hover:bg-gray-600`}>
          <FaArrowLeft /> Voltar
        </button>
      );
    default:
      return null;
  }
};

export default TableActionButton;