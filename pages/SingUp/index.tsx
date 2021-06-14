/**
 *
 */

import React, { FC, ReactElement, useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import useInput from '../../hooks/useInput';
=======
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components
>>>>>>> 3917c6a2cabead029d0ad1408e3408bf3876319a
import Input from '../../components/Inputs/PrimaryInput';
import Button from '../../components/Buttons/PrimaryButton';
import Title from '../../components/Titles/Title';
import axios, { AxiosResponse } from 'axios';

/* Env Variables */
const SINGUP_USERS_URL = process.env.SINGUP_USERS_URL;

<<<<<<< HEAD
const SingUp: FC = (): ReactElement => {

  /* Initializations */
  const progress: string[]= ['0%', '33%', '66%', '90%', '100%'];

  /* Local State */
  const [step, setStep] = useState(1);

  /* Custom Hook, useInput */
  const { value: firstName, bind: bindFirst } = useInput('');
  const { value: lastName, bind: bindLast } = useInput('');
  const { value: birthDate, bind: bindBirthDate } = useInput('');
  const { value: gender, bind: bindGender } = useInput('');
  const { value: country, bind: bindCountry } = useInput('');
  const { value: province, bind: bindProvince } = useInput('');
  const { value: postalCode, bind: bindPostalCode } = useInput('');
  const { value: addressLine, bind: bindAddressLine } = useInput('');
  const { value: suffering, bind: bindSuffering } = useInput('');
  const { value: idCard, bind: bindIdCard } = useInput('');
  const { value: userName, bind: bindUserName } = useInput('');
  const { value: email, bind: bindEmail } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');

  /* Functions */
  const handleSubmit = async () => {
    const response: AxiosResponse = await axios.post(`${SINGUP_USERS_URL}`, {
      'name': firstName,
      'lastName': lastName,
      'userName': userName,
      'email': email,
      'password': password,
      'birthDate': birthDate,
      'idCard': idCard,
      'suffering': suffering,
      'country': country,
      'province': province,
      'postalCode': postalCode
    })
    console.log(response);
  };
=======
interface IFormSchema {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    country: string;
    province: string;
    postalCode: string;
    addressLine: string;
    suffering: string;
    idCard: string;
    userName: string;
    email: string;
    password: string;
}
const onlyLettersRgx: RegExp = /^[a-zA-Z]+$/;
const onlyNumbersRgx: RegExp = /^[0-9]+$/;
const alphanumericRgx: RegExp = /^[a-zA-Z0-9]+$/;
const formSchema = yup.object().shape({
  firstName: yup.string().matches(onlyLettersRgx, { excludeEmptyString: true }).required(),
  lastName: yup.string().matches(onlyLettersRgx, { excludeEmptyString: true }).required(),
  birthDate: yup.string(),
  gender: yup.string().matches(onlyLettersRgx, { excludeEmptyString: true }),
  country: yup.string().matches(onlyLettersRgx, { excludeEmptyString: true }),
  province: yup.string().matches(onlyLettersRgx, { excludeEmptyString: true }),
  postalCode: yup.string().matches(onlyNumbersRgx, { excludeEmptyString: true }),
  addressLine: yup.string(),
  suffering: yup.string().matches(onlyLettersRgx, { excludeEmptyString: true }),
  idCard: yup.string().matches(onlyNumbersRgx, { excludeEmptyString: true }),
  userName: yup.string().matches(alphanumericRgx, { excludeEmptyString: true }),
  email: yup.string().email().required(),
  password: yup.string().min(6),
});

// SingUp
const SingUp: FC = (): ReactElement => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormSchema>({
    mode: 'all',
    resolver: yupResolver(formSchema)
  });
  // Form steps and progress
  const progress: string[] = ['0%', '33%', '66%', '90%', '100%'];
  const [step, setStep] = useState(1);

  // Handling submit button
  const onSubmit = handleSubmit(data => {
    if (step <= 4) {
      setStep(step + 1)
    }
    console.log('onSubmit', data)
  });
  const ifValidationErrors: boolean = !!Object.keys(errors).length;

  // TODO: Use a stylized component here to render fancy errors
  const _renderError = (field: keyof IFormSchema) => errors[field]?.message;
>>>>>>> 3917c6a2cabead029d0ad1408e3408bf3876319a

  return (
    <form className={'flex items-center justify-center flex-col w-full h-full'} onSubmit={onSubmit}>
      {/* LOGO AND TITLE */}
      <div className={'flex items-center justify-center flex-col mb-9'}>
        <figure className={'w-20 h-20 mb-6'}>
          <img className={'w-full'} src={'https://i.imgur.com/N9aSUrx.png'} alt={'Login img'} />
        </figure>
        <div className={'mb-6'}>
          <Title title={'Sing Up'} marginTop={'mt-2'} />
        </div>
        <div className={'w-primaryInput h-8 rounded-input border-primary border bg-secondary'}>
          <div className={'h-7 bg-primary rounded-input'} style={{ width: progress[step - 1] }} >
            <span className={`w-primaryInput h-8 flex items-center justify-center text-lg ${step >= 3 ? 'text-secondary' : 'text-black'}`}>{progress[step - 1]}</span>
          </div>
        </div>
        {/* <div className={'w-60 h-7 bg-primary border-primary border text-center'}>
          <div className={'h-7 bg-secondary'} style={{ width: progress[step - 1] }}>
            <span className={'absolute text-lg'} style={{ left: 'calc(50% - 12px)' }}>
              {progress[step - 1]}
            </span>
          </div>
        </div> */}
      </div>
      {/* FORM FIELDS */}
      <div className={'flex items-center justify-center flex-col'}>
        {step === 1 && (
          <div>
            <Input label={'First Name'} placeholder={'Zeus'} bind={register('firstName')} required />
            {_renderError('firstName')}
            <Input label={'Last Name'} placeholder={'Amenadiel'} bind={register('lastName')} required />
            {_renderError('lastName')}
            <Input label={'Birth Date'} placeholder={'17-09-1995'} bind={register('birthDate')} type={'date'} required />
            {_renderError('birthDate')}
            <Input label={'Gender'} placeholder={'Gender'} bind={register('gender')} required />
            {_renderError('gender')}
          </div>
        )}
        {step === 2 && (
          <div>
<<<<<<< HEAD
            <Input label="Country" placeholder="Dominican Republic" {...bindCountry} required />
            <Input label="Province" placeholder="Santo Domingo" {...bindProvince} required />
            <Input label="Postal Code" placeholder="41000" {...bindPostalCode} />
            <Input label="Address Lines" placeholder="Autopista Duarte, #17" {...bindAddressLine} required />
=======
            <Input label="Country" placeholder="Dominican Republic" bind={register('country')} required />
            {_renderError('country')}
            <Input label="Province" placeholder="Santo Domingo" bind={register('province')} required />
            {_renderError('province')}
            <Input label="Postal Code" placeholder="41000" bind={register('postalCode')} required />
            {_renderError('postalCode')}
            <Input label="Address Lines" placeholder="Autopista Duarte, #17" bind={register('addressLine')} required />
            {_renderError('addressLine')}
>>>>>>> 3917c6a2cabead029d0ad1408e3408bf3876319a
          </div>
        )}
        {step === 3 && (
          <div className={'h-sufferingDiv'}>
            <div className={'flex items-center justify-center flex-col mb-3.5'}>
              <label className={'text-lg font-normal mb-2'}>Description</label>
              <div className={'w-primaryInput pt-4 pb-4 flex items-center justify-center text-base pl-2 pr-2 rounded-tl-input rounded-br-input bg-tertiary'}>
                <p className={'w-56 font-light'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <Input label="Suffering" placeholder="Tachycardia" bind={register('suffering')} required />
            {_renderError('suffering')}
          </div>
        )}
        {step === 4 && (
          <div>
            <Input label="ID Card" placeholder="402-2392919-1" bind={register('idCard')} required />
            {_renderError('idCard')}
            <Input label="User Name" placeholder="zeus_amen" bind={register('userName')} required />
            {_renderError('userName')}
            <Input label="Email" placeholder="zamenadiel@email.com" bind={register('email')} required />
            {_renderError('email')}
            <Input label="Password" placeholder="sec2re-pass4rd" bind={register('password')} type="password" required />
            {_renderError('password')}
          </div>
        )}
        {step === 5 && (
          <div className={'w-primaryInput flex items-center justify-center flex-col'}>
            <span className={'mb-3.5'}>Congratulations, you're registered correctly, now going to:  </span>
            <Link href={'Login'}>Login Page</Link>
          </div>
        )}
        <div className="flex items-center justify-center flex-rows space-x-2 mb-2">
          {step > 1 && step <= 3 && (
            <div className={'mt-4 flex items-center justify-center flex-rows space-x-2'}>
              <Button onClick={() => setStep(step - 1)} middle={true} label="Back" inverted />
              <Button onClick={() => setStep(step + 1)} middle={true} label="Next" disabled={ifValidationErrors} />
            </div>
          )}
          {step === 1 ? (
            <div className={'mt-4'}>
              <Button onClick={() => setStep(step + 1)} label="Next" disabled={ifValidationErrors} />
            </div>
          ) : step === 4 && (
            <div className={'mt-4 flex items-center justify-center flex-rows space-x-2'}>
              <Button onClick={() => setStep(step - 1)} middle={true} label="Back" inverted />
              <Button onClick={() => {
                onSubmit()
              }} middle={true} label="Finish" type='submit' disabled={ifValidationErrors} />
            </div>
          )}
        </div>
      </div>
      <span className="text-sm font-light mt-8">
        <Link href="/Login">You already have an account?</Link>
      </span>
    </form>
  );
};

export default SingUp;
