/**
 *
 */

import React, { FC, ReactElement } from 'react';
import { IButtons } from '../../utils/interfaces';

<<<<<<< HEAD
const input: FC<IButtons> = (props: IButtons): ReactElement => {
=======
interface IProps {
  onClick: Function;
  label: string;
  disabled?: boolean;
  inverted?: boolean;
  middle?: boolean;
  full?: boolean;
  type?: string;
}
>>>>>>> 3917c6a2cabead029d0ad1408e3408bf3876319a

  /* Initializations */
  const colorClasses = () => (inverted ? 'bg-secondary text-primary hover:text-secondaryButtonHover border-button border-primary' : 'bg-primary text-secondary hover:text-primaryButtonHover');
  const { label, onClick, disabled = false, inverted = false, middle = false, full = false, type = 'button'} = props;

  return (
    <input
      className={`${middle ? 'w-buttonMiddle' : 'w-primaryButton'} ${full ? 'w-primaryInput' : 'w-primaryButton'} h-primaryButton ${colorClasses()} text-lg font-normal rounded-button focus:outline-none`}
      type={type}
      value={label}
      disabled={disabled}
      onClick={() => onClick()}
    />
  );
};

export default input;
