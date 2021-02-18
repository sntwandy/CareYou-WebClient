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
  const colorClasses = () => (inverted ? 'bg-secondary text-primary hover:text-secondaryButtonHover border-button border-primary' : 'bg-primary text-secondary hover:text-primaryButtonHover');
  const { label, onClick, disabled = false, inverted = false } = props;

  return (
    <input
      className={`w-primaryButton h-primaryButton ${colorClasses()} text-lg font-normal rounded-button focus:outline-none`}
      type={'button'}
      value={label}
      disabled={disabled}
      onClick={() => onClick()}
    />
  );
};

export default input;
