/**
 *
 */

import React ,{ FC, ReactElement } from 'react';
import Link from 'next/link';

// Home page
const Index: FC = (): ReactElement => {
  return (
    <div>
      <h1 className={'text-sm'}>Hello World</h1>
      <Link href={'Login'}>Login</Link>
    </div>

  )
}

export default Index;
