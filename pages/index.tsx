import { GetStaticProps } from 'next';
import React from 'react';

export function HomepagePage() {
  return <>Hello from HomepagePage</>;
}

export default HomepagePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 600,
  };
};
