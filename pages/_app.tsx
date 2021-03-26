import React from 'react';
import Layout from '../components/Layout';
import '../styles/index.css';

const App = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
