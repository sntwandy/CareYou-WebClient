/**
 *
 */

import React, { FC } from 'react';

export interface InputProps {
  onChange: Function;
  value: any;
  type?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: FC<InputProps> = (props: InputProps) => {
  const { label, type = 'text', placeholder, onChange, value, required = false, disabled = false } = props;

  return (
    <div className="flex items-center justify-center flex-col mb-3.5">
      <label htmlFor="" className="text-2xl font-thin">
        {label}
      </label>
      <input
        className="w-72 h-12 text-lg text-center rounded-tl-3xl rounded-br-3xl outline-none bg-gray-200 focus:ring-2 focus:ring-black"
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
