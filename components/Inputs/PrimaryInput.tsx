/**
 *
 */

import React, { FC, ReactElement } from 'react';
import { IInputs } from '../../utils/interfaces';

export interface InputProps {
  onChange?: Function;
  value?: any;
  type?: string;
  placeholder?: string;
  bind?: any;
  position?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
}

const Primary: FC<IInputs> = (props: IInputs): ReactElement => {
  const {
    label,
    type = 'text',
    placeholder,
    onChange,
    value,
    required = false,
    disabled = false,
    position,
    bind,
    onError,
    error,
    onValidation,
    validation,
  } = props;

  return (
    <div className={'flex items-center justify-center flex-col mb-3.5'}>
      <label htmlFor="" className={'text-lg font-normal mb-2'}>
        {label}
      </label>
      <input
        className={`w-primaryInput h-primaryInput text-lg text-center rounded-tl-input rounded-br-input outline-none bg-tertiary ${
          onError
            ? error
            : onValidation
            ? validation
            : 'focus:ring-2 focus:ring-black'
        } ${position}`}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        {...bind}
        onChange={(e) => onChange && onChange(e)}
      />
    </div>
  );
};

export default Primary;
