import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import { useRouter } from 'next/router';

export default function Categories(): JSX.Element {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout backBtn backBtnLabel="Home" onBack={() => router.push('/')}>
        <div></div>
      </Layout>
    </div>
  );
}
