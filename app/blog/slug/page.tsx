import useTranslation from 'next-translate/useTranslation';

export default function Page() {
  const { t } = useTranslation('common');
  const example = t('variable-example', { count: 42 });

  return (
    <>
      <h1>Hello, Home page! SLUG</h1>
      <div>example: {example}</div>
    </>
  );
}
