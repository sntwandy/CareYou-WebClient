/**
 *
 */

import React, { FC } from 'react';
import Link from 'next/link';

// Hooks
import useInput from '../hooks/useInput';

// Components
import Input from '../components/Inputs/PrimaryInput';
import Button from '../components/Buttons/PrimaryButton';

// Login
const Login: FC = () => {
  // User data login, useInput hook
  const { value: userName, bind: bindUserName } = useInput('');
  const { value: userPassword, bind: bindUserPassword } = useInput('');

  // Handling submit button
  const handleSubmit = () => {
    console.log({
      userName,
      userPassword,
    });
  };

  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      {/* LOGO AND TITLE */}
      <div className="flex items-center justify-center flex-col mb-9">
        <figure className="w-20 h-20 mb-5">
          <img className="w-full h-full" src="https://i.imgur.com/THnBbd1.png" alt="Login img" />
        </figure>
        <h2 className="text-4xl font-bold">Login</h2>
      </div>
      {/* USERNAME, PASSWORD AND LOGIN BUTTON */}
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col mb-3.5">
          <Input type={'text'} label={'User Name'} placeholder={'Zeus'} {...bindUserName} />
        </div>
        <div className="flex items-center justify-center flex-col mb-3.5">
          <Input type={'password'} label={'Password'} placeholder={'sec2re-pass4rd'} {...bindUserPassword} />
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className="text-sm font-light mb-3">
            <Link href="/">Forgot password?</Link>
          </span>
          <Button onClick={handleSubmit} label={'Login'} />
        </div>
      </div>
      {/* SING UP BUTTON */}
      <div className="flex items-center justify-center flex-col">
        <div className="w-20 h-0.5 bg-black mt-14" />
        <span className="text-sm font-light mt-8">
          <Link href="/SingUp">Don't have an account?</Link>
        </span>
      </div>
      {/* FOOTER */}
      <div>
        <span>CareYou 2021</span>
      </div>
    </div>
  );
};

export default Login;
