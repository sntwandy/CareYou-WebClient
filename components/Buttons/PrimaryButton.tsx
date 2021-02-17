/**
 *
 */

import React, { FC } from 'react';

interface IProps {
  onClick: Function;
  label: string;
  disabled?: boolean;
  inverted?: boolean;
}

const input: FC<IProps> = (props: IProps) => {
  const colorClasses = () => (inverted ? 'bg-white text-black border-button border-primary' : 'bg-primary text-white');
  const { label, onClick, disabled = false, inverted = false } = props;

  return (
    <input
      className={`w-button h-button ${colorClasses()} hover:text-gray-700 text-lg font-normal rounded-button focus:ring-opacity-50 focus:outline-none`}
      type="button"
      value={label}
      disabled={disabled}
      onClick={() => onClick()}
    />
  );
};

export default input;
