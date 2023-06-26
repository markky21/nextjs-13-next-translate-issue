import getT from 'next-translate/getT';
import i18n from '../../../i18n';

interface Props {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: Props) {
  global.i18nConfig = i18n;
  const t = await getT('en', 'common');
  const example = t('variable-example', { count: 42 });

  return (
    <>
        <h1>Hello, Blog Dynamic Page!</h1>
        <h2>example with next-translate</h2>

        <div>translation example: {example}</div>
    </>
  );
}
