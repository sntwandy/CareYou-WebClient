/**
 *
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Auth = (props: any) => {

  /* Initializations */
  const router = useRouter();

  /* Local State */
  const [isLogged, setIsLogged] = useState(false);

  /* Component Update */
  useEffect(() => {
    const is = localStorage.getItem('Data')
    is !== null ? setIsLogged(true) : setIsLogged(false)
  }, [])

  useEffect(() => {
    !isLogged && router.push('/Login')
  }, [isLogged])

  return (
    <main>
      {props.children}
    </main>
  );
};

export default Auth;
