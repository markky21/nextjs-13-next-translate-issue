import getT from 'next-translate/getT';
import i18n from '../../../i18n';

export default async function Page() {
  global.i18nConfig = i18n;
  const t = await getT('en', 'common');
  const example = t('variable-example', { count: 42 });

  return (
    <>
      <h1>Hello, Home page! SLUG</h1>
      <div>example: {example}</div>
    </>
  );
}
