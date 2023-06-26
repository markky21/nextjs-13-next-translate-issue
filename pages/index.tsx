import { GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';

export function HomepagePage() {
  return (
    <>
      <h1>Hello from HomepagePage</h1>
      <h2>
        This app should reproduce issue with 404 on dynamic app routes when
        next-translation is used
      </h2>
      <hr />
      <ul>
        <li>
          <Link href={'blog-app/static-page'}>Blog app / static page</Link>
        </li>
        <li>
          <Link href={'blog-app/dynamic-page-123'}>Blog app / dynamic page</Link>
        </li>
        <li>
          <Link href={'blog-app-with-next-translate/static-page'}>Blog app with translation / static page</Link>
        </li>
        <li>
          <Link href={'blog-app-with-next-translate/dynamic-page-123'}>Blog app with translation / dynamic page</Link>
        </li>
      </ul>
    </>
  );
}

export default HomepagePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 600,
  };
};
