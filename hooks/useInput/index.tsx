/**
 *
 */
import { useState, ChangeEvent } from 'react';

// Interface
import { useInputInterface } from '../../utils/interfaces';

// Custom Hook
const useInput = (initialValue: any): useInputInterface => {
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
