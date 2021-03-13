/**
 *
 */

import React, { FC, ReactElement } from 'react';
import { IButtons } from '../../utils/interfaces';

const input: FC<IButtons> = (props: IButtons): ReactElement => {

  /* Initializations */
  const colorClasses = () => (inverted ? 'bg-secondary text-primary hover:text-secondaryButtonHover border-button border-primary' : 'bg-primary text-secondary hover:text-primaryButtonHover');
  const { label, onClick, disabled = false, inverted = false, middle = false, full = false} = props;

  return (
    <input
      className={`${middle ? 'w-buttonMiddle' : 'w-primaryButton'} ${full ? 'w-primaryInput' : 'w-primaryButton'} h-primaryButton ${colorClasses()} text-lg font-normal rounded-button focus:outline-none`}
      type={'button'}
      value={label}
      disabled={disabled}
      onClick={() => onClick()}
    />
  );
};

export default input;
