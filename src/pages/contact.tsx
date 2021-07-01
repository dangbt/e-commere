import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import { useRouter } from 'next/router';

export default function Contact(): JSX.Element {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout backBtn backBtnLabel="Home" onBack={() => router.push('/')}>
        <div></div>
      </Layout>
    </div>
  );
}
