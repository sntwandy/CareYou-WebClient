/**
 *
 */
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface useInputInterface {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  reset: () => void;
  bind: {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}
