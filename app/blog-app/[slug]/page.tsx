interface Props {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: Props) {
  return (
    <>
      <h1>Hello, Blog Dynamic Page!</h1>
      <h2>example without next-translate</h2>
    </>
  );
}
