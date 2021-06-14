/**
 *
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import JWT from '../jwt';
import Loading from '../../components/Loading';

const Auth = (props: any) => {

  /* Initializations */
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  /* Component Update */
  useEffect(() => {
    const token = localStorage.getItem('Token')
    if (token) {
      !JWT(token) ? router.push('/Login') : setIsLogged(true);
    } else {
      router.push('/Login')
    }
  }, [])

  return (
    <>
    {isLogged ? props.children : <Loading /> }
    </>
  );
};

export default Auth;
