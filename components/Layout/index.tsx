/**
 *
 */

import React from 'react';
import Head from 'next/head';

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>CareYou: Your health matters to us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        {props.children}
      </main>
      <footer>
        CareYou 2021
      </footer>
    </>
  )
};

export default Layout;
