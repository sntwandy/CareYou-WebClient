/**
 *
 */

import React, { FC, ReactElement } from 'react';
import { IInputs } from '../../utils/interfaces';

const Primary: FC<IInputs> = (props: IInputs): ReactElement => {

  /* Initializations */
  const { label, type = 'text', placeholder, onChange, value, required = false, disabled = false, position, onError = false, onValidation = false } = props;
  const error = 'border-2 border-red-600';
  const validation = 'border-2 border-green-600'

  return (
    <div className={'flex items-center justify-center flex-col mb-3.5'}>
      <label htmlFor="" className={'text-lg font-normal mb-2'}>
        {label}
      </label>
      <input
        className={`w-primaryInput h-primaryInput text-lg text-center rounded-tl-input rounded-br-input outline-none bg-tertiary ${onError ? error : onValidation ? validation : 'focus:ring-2 focus:ring-black'} ${position}`}
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

export default Primary;
