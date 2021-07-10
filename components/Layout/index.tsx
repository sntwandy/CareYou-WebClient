/**
 *
 */

import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const Layout = (props: any) => {
  const [t] = useTranslation()
  return (
    <>
      <Head>
        <title>CareYou: {t('Take Care Of Your Health')}.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={'bg-secondary'}>{props.children}</main>
      {/* <footer>
        CareYou 2021
      </footer> */}
    </>
  );
};

export default Layout;
