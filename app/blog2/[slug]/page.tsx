interface Props {
  params: { slug: string };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const dynamicParams = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const revalidate = 'force-cache';

export default async function Page({ params: { slug } }: Props) {

  return (
    <>
      <h1>Hello, Home page! 2 = 2</h1>
      <div>slug: {slug}</div>
    </>
  );
}
