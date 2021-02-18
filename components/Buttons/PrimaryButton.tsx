/**
 *
 */

import React, { FC, ReactElement } from 'react';

interface IProps {
  onClick: Function;
  label: string;
  disabled?: boolean;
  inverted?: boolean;
  middle?: boolean;
}

const input: FC<IProps> = (props: IProps):ReactElement => {
  const colorClasses = () => (inverted ? 'bg-secondary text-primary hover:text-secondaryButtonHover border-button border-primary' : 'bg-primary text-secondary hover:text-primaryButtonHover');
  const { label, onClick, disabled = false, inverted = false, middle = false} = props;

  return (
    <input
      className={`${middle ? 'w-buttonMiddle' : 'w-primaryButton'} h-primaryButton ${colorClasses()} text-lg font-normal rounded-button focus:outline-none`}
      type={'button'}
      value={label}
      disabled={disabled}
      onClick={() => onClick()}
    />
  );
};

export default input;
