import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = (
  {
    id,
    label,
    type = 'text',
    value,
    placeholder,
    error,
    onChange,
    disabled = false,
    required = false,
    className = '',
  }) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          mt-1 w-full px-3 py-2 rounded border
          ${error ? 'border-red-500' : 'border-gray-600'}
          bg-gray-800 text-white placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;