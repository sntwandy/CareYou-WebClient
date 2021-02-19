/**
 *
 */

import React, { FC, ReactElement } from 'react';

// Components
import Menu from '../../components/Menu';

// Home Page
const Home: FC = (): ReactElement => {
  return (
    <div className={'w-full h-full'}>
      <Menu />
      <div className={'flex items-center justify-center'}>
        <h1>Welcome to Home</h1>
      </div>
    </div>
  )
};

export default Home;
