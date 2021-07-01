import React from 'react';
import 'styles/globals.css';
import '@moai/core/dist/bundle.css';
import '@moai/core/dist/font/remote.css';

import type { AppProps /*, AppContext */ } from 'next/app';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
