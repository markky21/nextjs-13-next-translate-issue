import useTranslation from 'next-translate/useTranslation';

interface Props {
  params: { slug: string };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const dynamicParams = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const revalidate = 'force-cache';

export default function Page({ params: { slug } }: Props) {
  const { t } = useTranslation('common');
  const example = t('variable-example', { count: 42 });

  return (
    <>
      <h1>Hello, Home page! 2</h1>
      <div>slug: {slug}</div>
      <div>example: {example}</div>
    </>
  );
}
