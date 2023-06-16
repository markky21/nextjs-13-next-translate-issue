// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function CustomApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: Record<string, unknown> }>) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="HandheldFriendly" content="true" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
