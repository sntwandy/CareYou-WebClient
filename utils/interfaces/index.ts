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
};

export interface ISearch {
  id: number;
  name: string;
};

export interface IButtons {
  onClick: Function;
  label: string;
  disabled?: boolean;
  inverted?: boolean;
  middle?: boolean;
  full?: boolean;
};

export interface IInputs {
  onChange: Function;
  value: any;
  type?: string;
  placeholder?: string;
  position?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  onError?: boolean;
};

export interface IOption {
  text?: string;
  value: any
};

export interface IRadioGroup {
  onChange: Function;
  value: any;
  name: string;
  options: Array<IOption>;
  position?: string;
  label: string;
  disabled?: boolean;
};

export interface IWarningModal {
  warningModal: boolean;
  setWarningModal: (value: boolean) => void;
  message: string;
};

export interface IWarningnModalToConfirm {
  warningModalToConfirm: boolean;
  setWarningModalToConfirm: (value: boolean) => void;
  toDeleteSymptom: string;
  setToDeleteSymptomConfirm: (value: boolean) => void;
};

export interface ITitle {
  title: string;
  fontWeight?: string;
  fontSize?: string;
  marginTop?: string;
};

export interface IRecordCard {
  date: Date;
  attendant: String;
  case: String;
}

export interface IRecordCardProps {
  record: IRecordCard;
};

export interface IUser {
  birthDate: string;
  country: string;
  email: string;
  idCard: string;
  lastName: string;
  name: string;
  password: string;
  postalCode: string;
  province: string;
  suffering: string;
  userName: string;
}