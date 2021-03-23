/**
 *
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import JWT from '../jwt';

const Auth = (props: any) => {

  /* Initializations */
  const router = useRouter();

  /* Component Update */
  useEffect(() => {
    const token = localStorage.getItem('Token')
    if (token) {
      !JWT(token) && router.push('/Login')
    } else {
      router.push('/Login')
    }
  }, [])

  return (
    <main>
      {props.children}
    </main>
  );
};

export default Auth;
