/**
 *
 */
import React, { FC, useState } from 'react';
import Link from 'next/link';

// Hooks
import useInput from '../hooks/useInput';

// Components
import Input from '../components/Inputs/PrimaryInput';
import Button from '../components/Buttons/PrimaryButton';

// SingUp
const SingUp: FC = () => {
  // Form steps and progress
  const progress = ['0%', '33%', '66%', '100%'];
  const [step, setStep] = useState(1);

  // User data to login, useInput hook
  const { value: first, bind: bindFirst } = useInput('');
  const { value: last, bind: bindLast } = useInput('');
  const { value: birthDate, bind: bindBirthDate } = useInput('');
  const { value: gender, bind: bindGender } = useInput('');
  const { value: country, bind: bindCountry } = useInput('');
  const { value: province, bind: bindProvince } = useInput('');
  const { value: postalCode, bind: bindPostalCode } = useInput('');
  const { value: addressLine, bind: bindAddressLine } = useInput('');
  const { value: description, bind: bindDescription } = useInput('');
  const { value: suffering, bind: bindSuffering } = useInput('');
  const { value: idCard, bind: bindIdCard } = useInput('');
  const { value: username, bind: bindUserName } = useInput('');
  const { value: email, bind: bindEmail } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');

  // Handling submit button
  const handleSubmit = () => {
    console.log({
      first,
      last,
      birthDate,
      gender,
      country,
      province,
      postalCode,
      addressLine,
      description,
      suffering,
      idCard,
      username,
      email,
      password,
    });
  };

  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      {/* LOGO AND TITLE */}
      <div className="flex items-center justify-center flex-col mb-9">
        <figure className="w-20 h-20 mb-5">
          <img className="w-full h-full" src="https://i.imgur.com/THnBbd1.png" alt="Login img" />
        </figure>
        <h2 className="text-4xl font-bold mb-2">Sign Up</h2>
        <div className="w-60 h-7 bg-gray-200 text-center">
          <div className="h-7 bg-gray-300" style={{ width: progress[step - 1] }}>
            <span className="absolute text-lg" style={{ left: 'calc(50% - 12px)' }}>
              {progress[step - 1]}
            </span>
          </div>
        </div>
      </div>
      {/* FORM FIELDS */}
      <div className="flex items-center justify-center flex-col">
        {step === 1 && (
          <div>
            <Input label="Name" placeholder="John" {...bindFirst} required />
            <Input label="Last Name" placeholder="Doe" {...bindLast} required />
            <Input label="Birth Date" placeholder="10-10-2010" {...bindBirthDate} type="date" required />
            <Input label="Gender" placeholder="" {...bindGender} required />
          </div>
        )}
        {step === 2 && (
          <div>
            <Input label="Country" placeholder="Haiti" {...bindCountry} required />
            <Input label="Province" placeholder="Prince Port" {...bindProvince} required />
            <Input label="Postal Code" placeholder="33192" {...bindPostalCode} required />
            <Input label="Address Lines" placeholder="2400 Street" {...bindAddressLine} required />
          </div>
        )}
        {step === 3 && (
          <div>
            <Input label="Description" placeholder="..." {...bindDescription} required />
            <Input label="Suffering" placeholder="Tachycardia" {...bindSuffering} required />
          </div>
        )}
        {step === 4 && (
          <div>
            <Input label="ID Card" placeholder="402-2392919-1" {...bindIdCard} required />
            <Input label="Username" placeholder="jdoe" {...bindUserName} required />
            <Input label="Email" placeholder="jdoe@email.com" {...bindEmail} required />
            <Input label="Password" placeholder="sec2re-pass4rd" {...bindPassword} type="password" required />
          </div>
        )}
        <div className="flex items-center justify-center flex-rows space-x-2 mb-2">
          {step > 1 && <Button onClick={() => setStep(step - 1)} label="Back" inverted />}
          {step < 4 ? (
            <Button onClick={() => setStep(step + 1)} label="Next" />
          ) : (
            <Button onClick={handleSubmit} label="Finish" />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="w-20 h-0.5 bg-black mt-14" />
        <span className="text-sm font-light mt-8">
          <Link href="/Login">You already have an account?</Link>
        </span>
      </div>
      {/* FOOTER */}
      <div>
        <span>CareYou 2021</span>
      </div>
    </div>
  );
};

export default SingUp;
