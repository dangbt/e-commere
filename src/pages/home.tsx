import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import { useRouter } from 'next/router';
import BestSellSection from 'components/home/best-seller';
import RatingCustomer from 'components/home/rating-customer';
import InfoSection from 'components/home/info';
import NameSection from 'components/home/name';

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout backBtnLabel="Home" onBack={() => router.push('/')}>
        <div className="h-full pb-10 overflow-auto">
          <div className="px-6 py-6 mb-6">
            <InfoSection />
          </div>
          <div className="px-6 mb-6 md:pl-0">
            <BestSellSection />
          </div>
          <div className="p-6 mb-6 ml-6 mr-6 bg-white rounded md:ml-0">
            <NameSection />
          </div>
          <div className="px-4 mb-6">
            <RatingCustomer />
          </div>
        </div>
      </Layout>
    </div>
  );
}
