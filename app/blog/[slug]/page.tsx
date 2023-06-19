import getT from 'next-translate/getT';
import i18n from '../../../i18n';

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
  global.i18nConfig = i18n;
  const t = await getT('en', 'common');
  const example = t('variable-example', { count: 42 });

  return (
    <>
      <h1>Hello, Home page! 2</h1>
      <div>slug: {slug}</div>
      <div>example: {example}</div>
    </>
  );
}
