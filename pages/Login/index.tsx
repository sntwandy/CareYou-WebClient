/**
 *
 */

import React, { FC, ReactElement, useState } from 'react';
import Link from 'next/link';
import useInput from '../../hooks/useInput';
import Title from '../../components/Titles/Title';
import Input from '../../components/Inputs/PrimaryInput';
import Button from '../../components/Buttons/PrimaryButton';
import axios, { AxiosResponse } from 'axios';
import useRouter from 'next/router';
import Modal from '../../components/Modals/Warning';
import { useTranslation } from 'react-i18next';

/* Env Variables */
const LOGIN_USERS_URL = process.env.LOGIN_USERS_URL;

const Login: FC = (): ReactElement => {
  /* Initializations */
  const router = useRouter;
  const [t] = useTranslation();
  const [onError, setOnError] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [message, setMessage] = useState(String);
  const { value: userName, bind: bindUserName } = useInput('');
  const { value: password, bind: bindUserPassword } = useInput('');

  /* Functions */
  const handleSubmit = async () => {
    password === '' ||
    userName === '' ||
    password == undefined ||
    userName === undefined
      ? setMessage(
          'Apparently you have forgotten to fill in a field, please verify it.'
        )
      : setMessage(t('Incorrect Credentials'));
    try {
      const response: AxiosResponse = await axios.post(`${LOGIN_USERS_URL}`, {
        user: {
          userName: userName,
          password: password,
        },
        headers: {
          ContentType: 'application/json',
          Accept: '*/*',
        },
      });
      response.status === 200 &&
        localStorage.setItem('Token', response.data.body.accessToken);
      router.push('/Home');
    } catch (error) {
      setOnError(true);
      setWarningModal(true);
    }
  };

  return (
    <div className={'flex w-full h-full items-center justify-center flex-col'}>
      <figure className={'w-20 h-20 mb-6'}>
        <img
          className={'w-full'}
          src={'https://i.imgur.com/N9aSUrx.png'}
          alt={'Login img'}
        />
      </figure>
      <div className={'mb-6'}>
        <Title title={'Login'} marginTop={'mt-2'} />
      </div>
      <div className={'flex items-center justify-center flex-col'}>
        <div className={'flex items-center justify-center flex-col mb-3.5'}>
          <Input
            type={'text'}
            position={'relative'}
            label={t('User Name')}
            placeholder={'Zeus'}
            onError={onError}
            {...bindUserName}
          />
          <div
            className={
              'absolute w-5 h-primaryInput pt-4 ml-52 flex items-center justify-end'
            }
          >
            <img
              className={'w-5'}
              src={'https://i.imgur.com/TbqTM3L.png'}
              alt={'Login input'}
            />
          </div>
        </div>
        <div className={'flex items-center justify-center flex-col mb-1'}>
          <Input
            type={'password'}
            position={'relative'}
            label={t('Password')}
            placeholder={'sec2re-pass4rd'}
            onError={onError}
            {...bindUserPassword}
          />
          <div
            className={
              'absolute w-5 h-primaryInput pt-4 ml-52 flex items-center justify-end'
            }
          >
            <img
              className={'w-5'}
              src={'https://i.imgur.com/MWXYj1s.png'}
              alt={'Login input'}
            />
          </div>
        </div>
        <span className={'text-sm font-light mb-4'}>
          <Link href={'/'}>{t('Forgot password?')}</Link>
        </span>
        <Button onClick={handleSubmit} label={t('Login')} />
      </div>
      <span className={'text-sm font-light mt-8'}>
        <Link href={'/SingUp'}>{t("Don't have an account?")}</Link>
      </span>
      <div className={warningModal ? 'visible' : 'invisible'}>
        <Modal
          warningModal={warningModal}
          setWarningModal={setWarningModal}
          message={message}
        />
      </div>
    </div>
  );
};

export default Login;
