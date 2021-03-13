/**
 *
 */
import { useState, ChangeEvent } from 'react';
import { useInputInterface } from '../../utils/interfaces';

const useInput = (initialValue: any): useInputInterface => {

  /* Local State */
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      },
    },
  };
};

export default useInput;
