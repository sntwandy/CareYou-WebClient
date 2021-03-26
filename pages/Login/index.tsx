/**
 *
 */

import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import useInput from '../../hooks/useInput';
import Title from '../../components/Titles/Title';
import Input from '../../components/Inputs/PrimaryInput';
import Button from '../../components/Buttons/PrimaryButton';
import axios, { AxiosResponse } from 'axios';
import useRouter from 'next/router';

const Login: FC = (): ReactElement => {

  /* Initializations */
  const router = useRouter;
  const { value: userName, bind: bindUserName } = useInput('');
  const { value: password, bind: bindUserPassword } = useInput('');

  /* Functions */
  const handleSubmit = async () => {
    try {
      const response: AxiosResponse = await axios.post('http://localhost:3000/login', {
        "user": {
          "userName": userName,
          "password": password
        }
      });
      response.status === 200 && localStorage.setItem('Token', response.data.body.accessToken)
      console.log(localStorage.getItem('Token'))
      router.push('/Home')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={'flex w-full h-full items-center justify-center flex-col'}>
      <figure className={'w-20 h-20 mb-6'}>
        <img className={'w-full'} src={'https://i.imgur.com/N9aSUrx.png'} alt={'Login img'} />
      </figure>
      <div className={'mb-6'}>
        <Title title={'Login'} marginTop={'mt-2'} />
      </div>
      <div className={'flex items-center justify-center flex-col'}>
        <div className={'flex items-center justify-center flex-col mb-3.5'}>
          <Input type={'text'} position={'relative'} label={'User Name'} placeholder={'Zeus'} {...bindUserName} />
          <div className={'absolute w-5 h-primaryInput pt-4 ml-52 flex items-center justify-end'}>
            <img className={'w-5'} src={'https://i.imgur.com/TbqTM3L.png'} alt={'Login input'}/>
          </div>
        </div>
        <div className={'flex items-center justify-center flex-col mb-1'}>
          <Input type={'password'} position={'relative'} label={'Password'} placeholder={'sec2re-pass4rd'} {...bindUserPassword} />
          <div className={'absolute w-5 h-primaryInput pt-4 ml-52 flex items-center justify-end'}>
            <img className={'w-5'} src={'https://i.imgur.com/MWXYj1s.png'} alt={'Login input'}/>
          </div>
        </div>
        <span className={'text-sm font-light mb-4'}>
          <Link href={'/'}>Forgot password?</Link>
        </span>
        <Button onClick={handleSubmit} label={'Login'} />
      </div>
      <span className={'text-sm font-light mt-8'}>
        <Link href={'/SingUp'}>Don't have an account?</Link>
      </span>
    </div>
  );
};

export default Login;
