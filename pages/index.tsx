/**
 *
 */

import Link from 'next/link';
import React, { FC, ReactElement } from 'react';

// Index page
const Index: FC = (): ReactElement => {
  return (
    <>
      <h1>Welcome to the Index</h1>
      <Link href={'Login'}>Login</Link>
      <Link href={'SingUp'}>SingUp</Link>
      <Link href={'Home'}>Home</Link>
    </>
  )
}

export default Index;
