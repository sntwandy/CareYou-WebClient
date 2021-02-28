/**
 *
 */

import React, { FC } from 'react';

interface IOption {
  text?: string;
  value: any
}

interface IProps {
  onChange: Function;
  value: any;
  name: string;
  options: Array<IOption>;
  position?: string;
  label: string;
  disabled?: boolean;
}

const RadioGroup: FC<IProps> = (props: IProps) => {
  const { label, onChange, value, disabled = false, position, options, name } = props;

  return (
    <div className={'flex items-center justify-center flex-col mb-3.5'}>
      <label htmlFor="" className={'text-lg mb-2 font-medium'}>
        {label}
      </label>
      <div style={{ display: "flex" }}>
        {options.map(option =>
          <div key={`${name}_${option.text}`}>
            <label htmlFor={`${name}_${option.text}`}>{option.text}</label>
            <input
              className={`mx-4 text-lg text-center rounded-tl-input rounded-br-input outline-none bg-tertiary ${position}`}
              type="radio"
              id={`${name}_${option.text}`}
              value={option.value}
              disabled={disabled}
              checked={value === option.value}
              onChange={() => onChange({ target: { value: option.value } })}
              />
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioGroup;
