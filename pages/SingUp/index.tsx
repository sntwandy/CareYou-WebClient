/**
 *
 */

import React, { FC, ReactElement, useState } from 'react';
import Link from 'next/link';
import useInput from '../../hooks/useInput';
import Input from '../../components/Inputs/PrimaryInput';
import Button from '../../components/Buttons/PrimaryButton';
import Title from '../../components/Titles/Title';
import axios, { AxiosResponse } from 'axios';

/* Env Variables */
const SINGUP_USERS_URL = process.env.SINGUP_USERS_URL;

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

  return (
    <div className={'flex items-center justify-center flex-col w-full h-full'}>
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
            <Input label={'First Name'} placeholder={'Zeus'} {...bindFirst} required />
            <Input label={'Last Name'} placeholder={'Amenadiel'} {...bindLast} required />
            <Input label={'Birth Date'} placeholder={'17-09-1995'} {...bindBirthDate} type={'date'} required />
            <Input label={'Gender'} placeholder={'Gender'} {...bindGender} required />
          </div>
        )}
        {step === 2 && (
          <div>
            <Input label="Country" placeholder="Dominican Republic" {...bindCountry} required />
            <Input label="Province" placeholder="Santo Domingo" {...bindProvince} required />
            <Input label="Postal Code" placeholder="41000" {...bindPostalCode} />
            <Input label="Address Lines" placeholder="Autopista Duarte, #17" {...bindAddressLine} required />
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
            <Input label="Suffering" placeholder="Tachycardia" {...bindSuffering} required />
          </div>
        )}
        {step === 4 && (
          <div>
            <Input label="ID Card" placeholder="402-2392919-1" {...bindIdCard} required />
            <Input label="User Name" placeholder="zeus_amen" {...bindUserName} required />
            <Input label="Email" placeholder="zamenadiel@email.com" {...bindEmail} required />
            <Input label="Password" placeholder="sec2re-pass4rd" {...bindPassword} type="password" required />
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
              <Button onClick={() => setStep(step + 1)} middle={true} label="Next" />
            </div>
            )}
          {step === 1 ? (
            <div className={'mt-4'}>
              <Button onClick={() => setStep(step + 1)} label="Next" />
            </div>
          ) : step === 4 && (
            <div className={'mt-4 flex items-center justify-center flex-rows space-x-2'}>
              <Button onClick={() => setStep(step - 1)} middle={true} label="Back" inverted />
              <Button onClick={() => {
                if (step <= 4) {
                  setStep(step + 1)
                }
                handleSubmit()
              }} middle={true} label="Finish" />
            </div>
          )}
        </div>
      </div>
        <span className="text-sm font-light mt-8">
          <Link href="/Login">You already have an account?</Link>
        </span>
    </div>
  );
};

export default SingUp;
